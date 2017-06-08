import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

class Booklist extends Component
{
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    key={book.title}
                    onClick={ () => this.props.selectBook(book) }
                    className="list-group-item">
                    {book.title}
                </li>
            )
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    // Все, что возвращается - станет пропсом в BookList
    return {
        books: state.books
    }
}

// Все, что возвращает эта функция окажется в контейнере BookList как props
function mapDispatchToProps(dispatch) {
    // Каждый раз, когда будет вызван selectBook - результат должен быть передан всем нашим редьюсерам
    return bindActionCreators({ selectBook }, dispatch)
}

// Продвинет BookList из компонента в контейнер - он должен знать о новом отправленном методе selectBook.
// Делает его доступным как prop.
export default connect(mapStateToProps, mapDispatchToProps)(Booklist)
