var cart = [];
function addToCart(item1,item2){
 
    if(item2){
        cart.push(item2);
    }
    if(item1 != 2){
        cart.push(item1)
    }
    console.log("ai in cart: ",cart)
}

function deleteFirstItem(){
    cart.shift()
    console.log("ai in cart: ",cart)
}

function deleteLastItem(){
    cart.pop()
    console.log("ai in cart: ",cart)
}

function deleteByIndex(index){
    cart.splice(index,1)
    console.log("ai in cart: ",cart)
}

addToCart(2,3);
addToCart(17);
addToCart(19);
addToCart(20);
addToCart(300);
addToCart(400);

deleteFirstItem();
deleteLastItem();
deleteByIndex(1);