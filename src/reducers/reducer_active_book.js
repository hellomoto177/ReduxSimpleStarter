// Аргумент state - не стейт приложения, а стейт этого редьюсера
export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED' :
            return action.payload
    }
    return state
}