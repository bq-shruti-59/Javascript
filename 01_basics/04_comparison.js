// console.log(4 > 1)
// console.log(4 >= 1)
// console.log(4 < 1)
// console.log(4 == 1)
// console.log(4 != 1)

// console.log("4" > 1)       //js automatically converts the string to number before comparing.
// console.log("04" > 1)
// but make sure you are comparing two entities belonging to the same datatype



// console.log(null > 0)
console.log(null == undefined)
// console.log(null >= 0)

// The reason that an equality check == and comparisons < > >= <= work differently.
// Comparisons convert null to a number, treating it as 0.
// thats why, null >= 0 is true and null > 0 is false.

//strict check ===, checks values and datatypes as well.
console.log("1" === 1)
console.log(1 === 1)

