import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'

import reducers from './reducers/index'
import { addToCart } from './actions/cartActions'
import { postBook, deleteBook, updateBook } from './actions/booksActions'

import BooksList from './components/pages/BooksList'

const middleware = applyMiddleware(logger)

// STEP 1 create the store
const store = createStore(reducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  middleware
)

render(
  <Provider store={store}>
    <BooksList />
  </Provider>, document.getElementById('root')
)

// STEP 2 create and dispatch actions
// store.dispatch(postBook())

// DISPATCH a second action
// store.dispatch(postBook())

// DELETE a book
// store.dispatch(deleteBook({ id: 1 }))

// UPDATE a book
// store.dispatch(updateBook({
//   id: 2,
//   title: 'New title for the second book'
// }))

// -->> CART ACTIONS <<--
// ADD to cart
// store.dispatch(addToCart([{id: 2}]))
