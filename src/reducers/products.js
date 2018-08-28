var initialState = [
  {
    id: 1,
    name: 'Iphone 7 Plus',
    image: 'https://cdn.tgdd.vn/Products/Images/42/87840/iphone-7-plus-256gb-hh-600x600.jpg',
    description: 'Hàng công ty',
    price: 700,
    inventory: 10,
    rating: 4
  },
  {
    id: 2,
    name: 'Samsung Galaxy Note 8',
    image: 'https://cdn.tgdd.vn/Products/Images/42/106211/samsung-galaxy-note8-black-400x460.png',
    description: 'Xách tay',
    price: 1000,
    inventory: 15,
    rating: 3
  },
  {
    id: 3,
    name: 'Nokia 7 Plus',
    image: 'https://cdn.tgdd.vn/Products/Images/42/153854/nokia-7-plus-5-400x460.png',
    description: 'CPO',
    price: 600,
    inventory: 5,
    rating: 4
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    default: return [...state];
  }
}
