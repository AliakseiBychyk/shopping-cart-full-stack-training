import { createStore } from 'redux'
import reducers from './reducers/index'

// STEP 1 create the store
const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
store.subscribe(() => {
  console.log(`current state is `, store.getState())
})

// STEP 2 create and dispatch actions
store.dispatch({
  type: 'POST_BOOK',
  payload: {
    id: 1,
    title: 'this is the book title',
    description: 'this is the book description',
    price: 33.33
  }
})

// DISPATCH a second action
store.dispatch({
  type: 'POST_BOOK',
  payload: 
  {
    id: 2,
    title: 'this is the second book title',
    description: 'this is the book description',
    price: 45.25
  }
})

// DELETE a book
store.dispatch({
  type: 'DELETE_BOOK',
  payload: { id: 1 }
})

// UPDATE a book
store.dispatch({
  type: 'UPDATE_BOOK',
  payload: {
    id: 2,
    title: 'New title for the second book'
  }
})

// -->> CART ACTIONS <<--
// ADD to cart
store.dispatch({
  type: 'ADD_TO_CART',
  payload: [{id: 2}]
})


