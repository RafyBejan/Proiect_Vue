let products = [
  { id: 1, name: "Hidrofor-jet", price: 550 },
  { id: 2, name: "Pompa submersibilă", price: 700 },
  { id: 3, name: "Tăietor de iarbă", price: 400 },
];

let cart = [];

export const getProducts = () => {
  return products;
  
};

export const getCart = () => {
  return cart;
};


export const addToCart = (product) => {
  cart.push(product);
};


export const removeFromCart = (id) => {
  cart = cart.filter((item) => item.id !== id);
  products = products.filter((item) => item.id !== id);
};


export const clearCart = () => {
  cart = [];
};