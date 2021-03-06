// ADD TO CART
export const addToCart = (book) => ({
  type: 'ADD_TO_CART',
  payload: book
})

// DELETE FROM CART
export const deleteCartItem = (cart) => ({
  type: 'DELETE_CART_ITEM',
  payload: cart
})

// UPDATE CART
export const updateCart = (_id, unit) => ({
  type: 'UPDATE_CART',
  _id: _id,
  unit: unit
})