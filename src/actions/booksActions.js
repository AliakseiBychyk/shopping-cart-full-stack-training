export const postBook = book => ({
  type: 'POST_BOOK',
  payload: book
})

export const deleteBook = id => ({
  type: 'DELETE_BOOK',
  payload: id
})

export const updateBook = book => ({
  type: 'UPDATE_BOOK',
  payload: book
})

export const getBooks = () => ({
  type: 'GET_BOOKS'
})