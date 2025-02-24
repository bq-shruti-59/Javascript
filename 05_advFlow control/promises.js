// you can consider promise as a ticket or order number 
// that the work will be done or here pizza will be made

// function makePizza() {
//     const pizzaPromise = new Promise();
//     return pizzaPromise;
// }


// promises are made immediately
// but they do not resolve immdeiately
// they can resolve once the timer has finished or the data comes back

// A promise takes a callback function, and that callback function is going to give us 2 arguments:

// the resolve function
// the reject function

// function makePizza() {
//     const pizzaPromise = new Promise(function(resolve, reject) {
//         resolve("🍕 slice");
//     });
//     return pizzaPromise;
// }

// const pizza = makePizza();
// console.log(pizza);

// makePizza function doesn't give us the pizza, it gives us the promise of pizza, 
// that at some point in the future, we will either resolve a slice of pizza or reject it if something went wrong.

// modifying code to make pepperoniPizza & canadianPizza

function makePizza(toppings) {
    const pizzaPromise = new Promise(function (resolve, reject) {
        resolve(`Here is a pizza with the toppings ${toppings.join(' ')}`);
    });
    return pizzaPromise;
}

// const pepperoniPromise = makePizza(['Pepperoni']);
// const canadianPromise = makePizza(['Pepproni', 'mushroom', 'onions']);

// console.log(pepperoniPromise, canadianPromise);

// // The .join(' ') method converts the array into a single string with toppings separated by spaces.
// // this only gives promises
// // but 
// // This is a bit confusing because the dev tools will show you the value when it is resolved,
// //  but in JavaScript if you actually want to access the value of the pizza, you cannot say pepperoniPromise.value


// // .then() method
// pepperoniPromise.then(function (pizza) {
//     console.log("i git it ");
//     console.log(pizza);
// });


// Why do we take pizza as input
// The .then() method is used to handle the resolved value of a promise.
// The function inside .then() takes one argument, which is the value returned by resolve() in the original promise.
// In makePizza(), the resolve() function returns this string:
// js
// Copy
// Edit
// "Here is a pizza with the toppings pepperoni"
// That value is passed as an argument (pizza) to the function inside .then().



// introducing 1 second wait for the pizza to cook using setTimeout and then call resolve within that timeout.

// function makePizza(toppings) {
//     const pizzaPromise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve(`Here is a pizza with toppings ${toppings.join(' ')}`);

//         }, 1000);
//     });
//     return pizzaPromise;
// }

// const pepperoniPromise = makePizza(['Pepproni']);

// pepperoniPromise.then(function (pizza) {
//     console.log("I got it!!!!");
//     console.log(pizza);
// });

// Often what you will see is instead of making a promise and then returning it, 
// people will often just return the promise immediately.

// function makePizza(toppings) {
//     return new Promise(function(resolve, reject){
//         setTimeout(function () {
//             resolve(`Here is a pizza with toppings ${toppings.join(' ')}`);
//         }, 1000);
//     });
// }




// console.log("starting");

// pepperoniPromise.then(function(pizza) {
//     console.log("got it!");
//     console.log(pizza);
// });
// console.log("finishing");


makePizza(['pepperoni', 'ham']).then(function(pizza) {
    console.log(pizza);
    return makePizza(['ham', 'cheese']);
}).then (function(pizza){
    console.log(pizza);
})
// We can chain a .then() immediately onto it (because makePizza returns a promise), which gives a function that has a pizza. 
// Log the pizza so that we know that it still works.


//Promise.all()
// You could run them all concurrently, instead of one after another like we are doing (which is referred to as sequentially).

const pizzaPromise1 = makePizza(['hot', 'peppers', 'onion']);

const pizzaPromise2 = makePizza(['one', 'two', 'three', 'four', 'one', 'two', 'three', 'four']);

const pizzaPromise3 = makePizza(['ham', 'cheese']);



// If you have a few promises and all you care about is 
// when all 3 of them are finished, you can make a mega promise, which we will call a dinnerPromise.

const dinnerPromise = Promise.all([pizzaPromise1, pizzaPromise2, pizzaPromise3]);

// dinnerPromise.then(pizzas => {
//     console.log(pizzas);
// })



// other way
// array destructuring

// dinnerPromise.then(function (pizzas) {
//     [peppers, garbagePail, hamAndCheese] = pizzas;

//     console.log(peppers, garbagePail, hamAndCheese);
// });



// another way, destructure within the arguments directly.
dinnerPromise.then(function ([peppers, garbagePail, hamAndCheese]) {
    console.log(peppers, garbagePail, hamAndCheese);
});































