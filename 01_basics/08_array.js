// JS arrays are resizable

// JS array copy operation creates shallow copies
// Shallow copy- a copy whose properties share the same reference point as the original object.
// it means whatever changes will be made, it will occur in the original array


 const myArray = [0, 1, 2, 3, 4, 5]

 const names = ["efwe", "wedwed", "dwdwd"]

// console.log(myArray)
// console.log(myArray[2])

 const myArray2 = new Array(1, 2, 3, 4)

// console.log(myArray2[3])




//Array methods

// myArray.push(6)
// myArray.push(12)
// myArray.pop()

// console.log(myArray)



// myArray.unshift(3423)   //adds this number to the starting of array

// myArray.shift()         //removes the starting element of the array

// console.log(myArray.includes(9))    // to check if element exists

// console.log(myArray.indexOf(1231))



// const newArray = myArray.join()     // join - adds all the elements of an array into a string

// console.log(newArray)
// console.log(typeof newArray)

// console.log(myArray)




const marvel = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

// marvel.push(dc)     // this creates array inside array

// console.log(marvel)

// console.log(marvel[3][1])   // to access a value



// const allHeros = marvel.concat(dc)
// console.log(allHeros)



// using spread operator ...
// const newHeros = [...marvel, ...dc]
// console.log(newHeros)


// const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [8, 9]]]

// const newAnotherArray = anotherArray.flat(Infinity)     // to simplify the array
// console.log(newAnotherArray)




// to make an array from different entities

let num1 = 100
let num2 = 200
let num3 = 300

console.log(Array.of(num1, num2, num3))







