import * as types from '../constants/ActionTypes';

export const actAddToCart = (product, quantity) => {
  return {
    type: types.ADD_TO_CART,
    product,
    quantity
  }
}

export const actChangeMessage = (message) => {
  return {
    type: types.CHANGE_MESSAGE,
    message
  }
}

export const actChangeQuantity = (product, quantity) => {
  return {
    type: types.CHANGE_QUANTITY,
    product,
    quantity
  }
}

export const actRemoveProductInCart = (product, quantity) => {
  return {
    type: types.REMOVE_PRODUCT_IN_CART,
    product
  }
}
