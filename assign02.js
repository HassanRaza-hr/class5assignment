"use strict";
// Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities
// using the splice method. Print the cart's contents after each operation
var shopitems = ["eggs", "meat", "baisan", "cream", "yogurt"];
function shoppingcart(index, delete01, add) {
    shopitems.splice(index, delete01, add);
    console.log(shopitems);
}
shoppingcart(shopitems.length, 0, "milk pak");
