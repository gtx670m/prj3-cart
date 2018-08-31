import * as types from '../constants/ActionTypes';
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      const newProduct = {
        product: action.product,
        quantity: action.quantity
      }
      const check_duplicate = state.find(state => state.product.id === newProduct.product.id);
      if (check_duplicate) {
        check_duplicate.quantity++;
      } else {
        state.push(newProduct);
      }
      localStorage.setItem('CART', JSON.stringify(state));
      return [...state];

    case types.CHANGE_QUANTITY:
      const change_quantity = state.find(state => state.product.id === action.product.id);
      change_quantity.quantity += action.quantity;
      localStorage.setItem('CART', JSON.stringify(state));
      return [...state]

    case types.REMOVE_PRODUCT_IN_CART:
      const index = state.findIndex(state => state.product.id === action.product.id);
      state.splice(index, 1);
      localStorage.setItem('CART', JSON.stringify(state));
      return [...state]
    default: return state;
  }
}


