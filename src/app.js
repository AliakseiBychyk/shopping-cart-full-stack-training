import { createStore } from 'redux'

// STEP 3 define reducers
const reducer = (state = { books: [] }, action) => {
  switch (action.type) {
    // case 'INCREMENT':
    //   return state + action.payload
    // case 'DECREMENT':
    //   return state - action.payload 
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

// STEP 1 create the store
const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
store.subscribe(() => {
  console.log(`current state is`, store.getState())
  console.log('current price is ', store.getState().books[0].price )
})

// STEP 2 create and dispatch actions

// store.dispatch({ type: 'INCREMENT', payload: 1 })
// store.dispatch({ type: 'INCREMENT', payload: 10 })
// store.dispatch({ type: 'DECREMENT', payload: 1 })
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


