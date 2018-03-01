// CART REDUCERS
const cartReducer = (state = { cart: [] }, action) => {
  switch (action.type) { 
    case "ADD_TO_CART":
      return { cart: [...state.cart, ...action.payload] }
    case "DELETE_CART_ITEM":
      // return { cart: [...state.cart, ...action.payload] }
      return { ...state, cart: action.payload}
    case "UPDATE_CART":
      return {
        ...state,
        cart: [...state.cart].map(book => book._id === action._id
          ? { ...book, quantity: book.quantity + action.unit }
          : book
        )
      }
    default:
      return state
  }
}

export default cartReducer