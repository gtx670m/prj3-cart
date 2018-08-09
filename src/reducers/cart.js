import * as types from '../constants/ActionTypes';
// var data = JSON.parse(localStorage.getItem('cart'));
// var initialState = data ? data : [];
var initialState = [
    {
        product: {
            id: 1,
            name: 'Iphone 7 Plus',
            image: 'https://cdn.tgdd.vn/Products/Images/42/87840/iphone-7-plus-256gb-hh-600x600.jpg',
            description: 'Hàng công ty',
            price: 700,
            inventory: 10,
            rating: 4
        },
        quantity: 5
    }
];
export default (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            console.log(action);
            return [...state];
        default: return [...state];
    }
}

