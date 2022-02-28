// Create a JavaScript Function that takes in an:
//     Action String - string representing what the user wants to i.e. "add_to_cart", "remove_from_cart", "remove_all_from_cart", "empty_cart"
//     a Item JS Object [dictionary] (the contents of which are unimportant)
//     a Cart Array which you should Default to an EMPTY ARRAY (because our cart starts empty)


// The function will use a switch statement to preform a different action based on the Action String


// Write the code to add items to the cart, remove a single item from the cart (just 1 item if they have multiple of the same item in the cart), 
// remove all of a single item from the cart (aka if the user bought 3 t-shirts it would remove all 3 of those same tshirts), 
// and the clear the cart (aka give them an empty cart)
// EACH ONE OF THESE ACTIONS SHOULD RETURN a fresh Cart array with the changes
// if the item in not in the cart and the user asked to remove said item then just return the cart unchanged.


// HERE IS THE CATCH:
//      You need each one of these actions to be preformed as an Out-of-Place algorithm not In-Place
// NOTE:
//      Out-of-Place would mean that the cart object that was inputted will never be changed and we will return a brand new copy of cart [array]

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
let cart = []
let items = {
    chocolate:'Dark Chocolate',
    matcha: 'Green Tea',
    strawberry: 'Creamy Strawberry',
    vanilla: 'Madagascar Vanilla Bean'
}
let actionString

function myCart(actionString, items, cart){
    // SWITCH STATEMENT
    switch(actionString){
        case 'add_to_cart':
            newCart = [...cart, items]
            return newCart

        case 'remove_from_cart':
            newCart = [...cart]
            newCart.splice(newCart.indexOf(items),1)
            return newCart

        case 'remove_all_from_cart':
            newCart = []
            for (let i of cart){
                if (i != items){
                    newCart.push(i)
                    console.log(newCart)
                };
            };
            return newCart
        
        case 'empty_cart':
            newCart = []
            return newCart
    };
};

let currentCart = []
console.log('===================================================')
// ADD TO CART (TEST)
let fCart = myCart('add_to_cart', items.chocolate, currentCart)
console.log(fCart)
fCart = myCart('add_to_cart', items.matcha, currentCart)
console.log(fCart)
fCart = myCart('add_to_cart', items.strawberry, currentCart)
console.log(fCart)
fCart = myCart('add_to_cart', items.matcha, currentCart)
console.log(fCart)
console.log('===================================================')
// REMOVE FROM CART (TEST)
fCart = myCart('remove_from_cart', items.matcha, currentCart)
console.log(fCart)
console.log('===================================================')
// REMOVE ALL FROM CART (TEST)
fCart = myCart('add_to_cart', items, currentCart)
console.log(fCart)
fCart = myCart('remove_all_from_cart', items.matcha, currentCart)
console.log(fCart)
console.log('===================================================')
// EMPTY CART (TEST)
fCart = myCart('empty_cart', items, currentCart)
console.log(fCart)



   

