import { createStore } from 'redux'

// STEP 3 define reducers
const reducer = (state = [], action) => {
  switch (action.type) {
    // case 'INCREMENT':
    //   return state + action.payload
    // case 'DECREMENT':
    //   return state - action.payload 
    case 'POST_BOOK':
      return state = action.payload
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
  console.log('current price is ', store.getState()[1].price )
})

// STEP 2 create and dispatch actions
// store.dispatch({ type: 'INCREMENT', payload: 1 })
// store.dispatch({ type: 'INCREMENT', payload: 10 })
// store.dispatch({ type: 'DECREMENT', payload: 1 })
store.dispatch({
  type: 'POST_BOOK',
  payload: [{
    id: 1,
    title: 'this is the book title',
    description: 'this is the book description',
    price: 33.33
  },
  {
    id: 2,
    title: 'this is the second book title',
    description: 'this is the book description',
    price: 45.25
  }]
})


