import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import reducers from './reducers/index'
import { addToCart } from './actions/cartActions'
import { postBook, deleteBook, updateBook } from './actions/booksActions'



const middleware = applyMiddleware(logger)

// STEP 1 create the store
const store = createStore(reducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  middleware
)
// store.subscribe(() => {
//   console.log(`current state is `, store.getState())
// })

// STEP 2 create and dispatch actions
store.dispatch(postBook({
  id: 1,
  title: 'this is the book title',
  description: 'this is the book description',
  price: 33.33
}))

// DISPATCH a second action
store.dispatch(postBook({
  id: 2,
  title: 'this is the second book title',
  description: 'this is the book description',
  price: 45.25
}))

// DELETE a book
store.dispatch(deleteBook({ id: 1 }))

// UPDATE a book
store.dispatch(updateBook({
  id: 2,
  title: 'New title for the second book'
}))

// -->> CART ACTIONS <<--
// ADD to cart
store.dispatch(addToCart([{id: 2}]))


