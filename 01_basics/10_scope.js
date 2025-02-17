// global scope

// let a = 100
// const b = 200
// var c = 300

if(true){               // block scope
    // let a = 100
    // const b = 200
    var c = 300
}

// console.log(a)
// console.log(b)
// console.log(c)


// this is the issue c gets printed even if it was declared only within the function



// var value can be manipulated from anywhere
if(true){
    var c = 300
}
var c = 3423

// console.log(c)



// when we use let
// value of outside block scope will remain as it was previously.

let x = 23

if(true){
    let x = 2347
    // console.log("Inner value: ", x)
}

// console.log(x)




//-----------------------------------------------------------



function one(){
    const username = "shruti"

    function two(){
        const website = "youtube"
        // console.log(username)
    }

    // console.log(website)        // gives error

    two()
}

one()



if(true){
    const user = "shruti"

    if(user === "shruti"){
        const web = "fb"
        // console.log(user + web)
    }

    // console.log(web)    // this will give error
}

// console.log(user)   // this will also give error because user scope is only inside the if stm





//-------------HOISTING----------------------------------

// There are two things in JavaScript that are hoisted:

// function declarations
// variable declarations.


//function hoisting
// console.log(addOne(21))     // this will work

function addOne(num){
    return num + 1;
}



// addTwo(54)      // gives error because the value is stored in a variable that is not declared yet.

const addTwo = function (nums){
    return nums + 2;
}

addTwo(54)
// Only function declaration types of functions are hoisted, not function expressions (when you put a function in a variable).




sayHi();            // works
function sayHi() {
//   console.log('hey!');

//   console.log(add(2, 3))
}

function add(num1, num2){
    return num1 + num2;
}



// variable hoisting

// console.log(age);   // undefined
// var age = 10;


var age;
// console.log(age);       // again undefined
age = 10;