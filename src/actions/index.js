export function selectBook(book) {
    // selectBook это ActionCreator, он нужен для того, чтобы вернуть action
    // action - объект со свойством тип
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}