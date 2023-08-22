// Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities
// using the splice method. Print the cart's contents after each operation
var shopitems:string[]=["eggs","meat","baisan","cream","yogurt"]
function shoppingcart(index:number,delete01:number,add:string){
    shopitems.splice(index,delete01,add)
    console.log(shopitems)
}
shoppingcart(1,0,"milk pak")