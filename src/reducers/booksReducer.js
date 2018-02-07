const initialState = {
  books:
    [{
      id: 1,
      title: 'This is the book title',
      description: 'this is the book description',
      price: 44.33
    }, {
      id: 2,
      title: 'This is the second book title',
      description: 'this is the book description',
      price: 55.25
    }]
}

const booksReducer = (state=initialState , action) => {
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
    case 'GET_BOOKS':
      return { ...state, books: [...state.books]}
    break  
  }
  return state
}

export default booksReducer