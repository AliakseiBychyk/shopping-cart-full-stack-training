const booksReducer = (state = { books: [] }, action) => {
  switch (action.type) {
    case 'POST_BOOK':
      return { books: [...state.books, action.payload] }
    case 'DELETE_BOOK':
      return { books: [...state.books].filter(({id}) => id !== action.payload.id) }
    case 'UPDATE_BOOK':
      return {
        books: [...state.books].map(book => book.id === action.payload.id
          ? { ...book, title: action.payload.title }
          : book
        )
      }  
    break  
  }
  return state
}

export default booksReducer