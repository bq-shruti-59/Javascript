/* on the basis of datatype storage in memory and its access, datatypes are divided into 2 categories. 
primitive and non- primitive */

//Primitive

// 7 types : String, Numbers, Boolean, Null, undefined, symbol, bigInt

// const score = 100
// const scoreValue = 100.3
// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId)   //they wont be same

// const bigNumber = 62374623462934872428n


// //Non- primitive (reference datatypes)

// // Array, Objects, Functions

// const heros = ["h1", "h2", "h3", "h4"];

// const myObj = {
//     name: "shruti",
//     age: 22
// }

// const myFunction = function(){
//     console.log("hello world")
// }


// console.log(typeof heros)
// console.log(typeof myObj)
// console.log(typeof myFunction)



//--------------------------------------------------------



//MEMORY TYPES

// stack memory for (primitive), heap for (non- primitive)

let myName = "shruti"

let anotherName = myName
console.log(anotherName)
anotherName = "SS"

console.log(myName)
console.log(anotherName)

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "shruti@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)
