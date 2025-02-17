
// ------------------conversions----------------------------

// let score = "22abc"

// console.log(typeof score);
// console.log(typeof(score));

// let valueOfNumber = Number(score)
// console.log(typeof valueOfNumber);
// console.log(valueOfNumber);     //gives NaN

// let score = null

// console.log(typeof score);
// console.log(typeof(score));

// let valueOfNumber = Number(score)
// console.log(typeof valueOfNumber);
// console.log(valueOfNumber);     //gives 0


// let score = undefined

// let valueOfNumber = Number(score)
// console.log(typeof valueOfNumber);
// console.log(valueOfNumber);     //gives NaN


// let score = true

// let valueOfNumber = Number(score)
// console.log(typeof valueOfNumber);
// console.log(valueOfNumber);     //gives 1



// "33" => 33
// "22abc" => NaN
// true => 1; false => 0



// let isLoggedIn = 1 
// let isLoggedIn = ""
// let isLoggedIn = "shruti"

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// 1 => true
// "" => false
// "shruti" => true



//--------------------OPERATIONS----------------------------

// let value = 3
// let negValue = -value
// console.log(negValue)

// console.log(2**2)   // give 2 raised to power 2
// console.log(2/2)
// console.log(3+7)
// console.log(2%3)


// let str1 = "hello"
// let str2 = "shruti"

// let str3 = str1 + " " + str2
// console.log(str3)


// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");


// let count = 100
// count++;
// ++count;
// console.log(count)

// let x = 2
// let y = x++     //postfix increament
// console.log(x, y)

// let x = 2
// let y = ++x        //prefix increament
// console.log(x, y)



// Nullish Coalescing operator (??): null defined

// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 15

// console.log(val1)

// this is used to overcome errors 
// gives the firstmost possible value ahead of null or undefined





//terniary operator

// condition ? true : false

const price = 75

price <= 80 ? console.log("less than 80"): console.log("more than 80")
