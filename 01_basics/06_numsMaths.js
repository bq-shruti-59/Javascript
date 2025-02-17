// const score = 400
// console.log(score)

// const balance = new Number(100)     //to make sure that it is a number only
// console.log(balance)


// console.log(balance.toString().length);     // numbers have limited inbuilt functions 
//                                             // so converted to string, now we can use string properties

// console.log(balance.toFixed(2))     // to get value upto to n decimal places 


// const num2 = 534.47292

// console.log(num2.toPrecision(3))    // to get value upto 3 places, if num is greater, converts in exponential form.

// console.log(num2.toPrecision(2))


// const number = 10000000
// console.log(number.toLocaleString('en-IN'))     // to insert indian standard commas






//---------------MATHS----------------------------------------------------------

// console.log(Math)

// console.log(Math.abs(-23131))

// console.log(Math.round(342.453))

// console.log(Math.ceil(23.342))

// console.log(Math.floor(2.23))

// console.log(Math.min(3, 2, 56, 34))

// console.log(Math.max(32, 324, 5, 453))



// console.log(Math.random())
// console.log(Math.random()*10)   //can also get a value as 0.04424

// console.log((Math.random()*10) + 1)   // to make sure that the value is greater than 0 




const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
