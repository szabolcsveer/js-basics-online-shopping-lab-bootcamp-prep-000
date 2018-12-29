var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // write your code here
 // 
 Object.assign(itemName);
 function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
 
  var price =  getRandomInt(100);
  itemName = { itemName: "name", itemPrice: price  };


 
 
 return itemName + "has been added to your cart.";

}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
