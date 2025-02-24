// function greet(){
//     console.log("hiii")
//     console.log("how are  you")
//     console.log("good")
// }

// greet()


// function addTwoNums(num1, num2){
//     console.log(num1 + num2)
// }

// const result = addTwoNums(2, 4)
// console.log("Result: ", result)     // it gives undefined


// function addTwoNums(num1, num2){
    
//     return num1 + num2
// }

// const result = addTwoNums(23, 34)

// console.log("Result: ", result)




// function loginUser(username = "abc"){       // here we set a default value 
    
//     if(username === undefined){
//         console.log("Please enter a valid username")
//         return
//     }

//     return `${username} just logged in`
// }

// console.log(loginUser("shruti"))

// console.log(loginUser())    // gives undefined just logged in


function calculatePrice1(...num2){
    return num2
}

// console.log(calculatePrice1(34134, 4242, 23424, 24234, 42, 342))


function calculatePrice(val1, val2, ...num1){
    return num1
}    

// console.log(calculatePrice(231, 32131, 313, 1341, 32))



//in objects

const entity = {
    item: "cap",
    price: 200
}

function handleObject(anyObject){
    // console.log(`Entity is ${anyObject.item} and its price is ${anyObject.price}`);
}

handleObject(entity)


//we can also directly pass an object
handleObject({
    item: "bag", 
    price: 343245
})




//in array

const myNewArray = [123, 3424, 342, 43, 424];

function getSecondEle(anyArray){
    return anyArray[1];
}

// console.log(getSecondEle(myNewArray))

// console.log(getSecondEle([3423, 342, 2423, 645, 67]))






//------------arrow functions---------------------------------------



// this keyword refers to current context 
const user = {
    username: "shruti",
    id: 1000,

    welcomeMessage: function(){
        // console.log(`${this.username}, welcome to the website`);
        // console.log(this)       // prints the current context of variables
    }
}

user.welcomeMessage()

user.username = "sam"
user.welcomeMessage()


// console.log(this)   // when we are in node env., thios refers to empty object.




function fun(){
    let username = "shruti"
    // console.log(this.username);     // this keyword cannot be used in functions without object
}
fun()



//same is the case with variables
const abc =function fun2(){
    let username = "shruti"
    // console.log(this.username);     // this keyword cannot be used in functions without object
}
// fun2()




//arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(2, 3))



// implicit return 
// means when we do not use {}, and if we do not use {} then return keyword is not mandatory to be mentioned.

// const addTwo = (num1, num2) => (num1 + num2)

// console.log(addTwo(2, 3))



//when we want to return an object, we need to wrap it in ( )
// const addTwo = (num1, num2) => ({username: "shruti"})

// console.log(addTwo(2, 3))




//-------------------IIFE---------------------------------------

//Immediately invoked function expression
// work: to execute immediately after being initialized
// need: to avoid any changes through global scope variables/ global pollution

// ;(function (){
//     console.log(`DB Connected`);
// })();

// // ; is necessary for it to know where the function starts and ends

// (() => {
//     console.log(`DB Connected neww`);
// })();


// // passing parameter in IIFE

// ((name) => {
//     console.log(`DB Connected neww ${name}`);
// })("shruti");

















//----------------functions again----------------------------

// //ANNONYMOUS FUNCTION
// function (name){                // gives syntax error
//     return `Hey this is ${name}`
// }

// // Anonymous functions are only valid in some use cases, 
// // such as using them in callbacks as well as in an IIFE



// FUNCTION EXPRESSIONS
// const myname = function (name){                // gives syntax error
//     return `Hey this is ${name}`
// }

// console.log(myname("shruti"))




// //--------- hoisting --------------------
// // Functions that are declared with the function keyword are called hoisted.
// // JavaScript does not hoist variable functions.

// console.log(display("shruti"))
// console.log(displayvar("shruti"))   // cannot access before initialization

// function display (username) {
//     return `hey this is ${username}`
// }

// const displayvar = function (username){
//     return `Hey this is ${username}`
// }





// // ARROW FUNCTIONS
// // are also anonymous functions
// // You always have to stick it into a variable
// // allow for writing one line functions
// // do not have their own scope in reference to the this keyword 


// const inchToCm = (inches) => {
//     return inches * 2.54;
// }

// console.log(inchToCm(3));


// // EXPLICIT RETURN 
// // An explicit return is when you type the return keyword before returning a value
// // exactly what we did above


// // IMPLICIT RETURN
// // returning it without actually having to type the keyword return


// const inchToCm2 = (inches) => (inches * 2.54);
// console.log(inchToCm2(3));


// const add = (a, b=3) => (a + b)
// console.log(add(3, 5))




// // returning an object 

// function makePerson(first, last) {
//     const person = {
//         name: `${first} ${last}`,
//         age: 2
//     };
//     return person;
// }


// // converting this into an arrow function
// const makePerson2 = (first, last) => ({
//         name: `${first} ${last}`,
//         age: 2
//     }
// )
// console.log(makePerson2("shruti", "shri"))




// // IIFE
// // immediately invoked function expression

// // function (){
// //     console.log('running an anno function');
// //     return 'you are cool';
// // }

// // one way to run this function is using a variable
// // anothor way is to use iife

// // ;(function(){
// //     console.log('running an anno function');
// //     return 'you are cool'
// // })();


// // with parameter
// ;(function(age){
//     console.log('running an anno function');
//     console.log( `you are cool ${age}`)
// })(455);


// example
// without iife (global pollution)
let counter =0;

function inc (){
    counter++;
}

inc();
console.log(counter)
// Here, counter is in the global scope and can be accessed or modified anywhere, which may cause unexpected behavior.



// using iife
;(function inc(){
    let counter = 0;    //private variable

    function inc(){
        counter++;
    }
    inc();
    inc();

})();
console.log(counter);   // undefined





// METHODS

// A method is simply a function that lives inside of an object.
// in console.log(),
// console is an object 
// log() is a method

const wes = {
    name: "shruti",
    sayHi: function (){
        console.log(this);
        console.log("hey shruti");
        return "hey shruti";
    },
    yellHi() {
        console.log("HEY WESSSSS");
    },
    whisperHi: () => {
        console.log('hiii wess im a mouse');
    }
};
// console.log(wes.sayHi())
// console.log(wes.yellHi())
// console.log(wes.whisperHi())





// const wes = {
//     name: "shruti",
//     sayHi: function sayHi(){
//         console.log(`hey ${this.name}`);
//         return `hey shruti`;
//     }
// }
// console.log(wes.sayHi())
// // That will not work in an arrow function because they take the parent scope of this




// CALLBACK FUNCTIONS
// callback function is a function that gets passed into another function and then it is called by the browser at a later point in time.
// means either when someone clicks something, run this. Or when this amount of time has passed, run this.
// types: click callback, timer callback

// // click callback
// const button = document.querySelector(".clickMe");
// console.log(button)

// button.addEventListener("click", wes.sayHi);


// //another example
// function handleClick(){
//     console.log("great clicking");
// }
// button.addEventListener("click", handleClick);



// // timer callback

// // setTimeout();
// // It takes two things:

// // a function to call after a certain amount of time
// // a duration in milliseconds (after how long should I run this)

// setTimeout(wes.sayHi, 2000)



// // You can also pass it an anonymous function.

// setTimeout(function () {
//     console.log("we are trying timer callback")
// }, 2000)


// // You can pass those as arrow functions as well.

// setTimeout(() => {
//     console.log("did this using settimeout in arrow function")
// }, 4000)


// myVar = setTimeout(function, milliseconds);
// clearTimeout(myVar);

// If the function has not already been executed, 
// you can stop the execution by calling the clearTimeout() method





// // set interval
// setInterval(function, milliseconds);
// The first parameter is the function to be executed.

// The second parameter indicates the length of the time-interval between each execution.

let myInterval = setInterval(wes.sayHi, 1000)

clearInterval(myInterval);





// WAYS TO CALL A FUNCTION
// - call as a function
// - call as a method
// - call a function with the constructor


// function add(a, b) {
//     return a + b;
// }
// console.log(add(5, 6))

// This is a common way to invoke a JavaScript function, but not a very good practice.
// Global variables, methods, or functions can easily create name conflicts and bugs in the global object.





// caling as a method
const myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
console.log(myObject.fullName());  
// The thing called this, is the object that "owns" the JavaScript code. In this case the value of this is myObject.


// calling function as constructor

function myFunction(arg1, arg2) {
    this.firstName = arg1;
    this.lastName = arg2
}

const myObj = new myFunction("shruti", "shrivastava")

console.log(myObj.firstName)






// CALL BIND APPLY, THIS

// this

// this keyword refers to an object.

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.


// const person = {
//     firstName: "shruti",
//     lastName: "shri", 
//     fullName: function (){
//         return this.firstName + " " + this.lastName;
//     }
// }
// console.log(person.fullName());

// In the example above, this refers to the person object.

// this is not a variable. It is a keyword. You cannot change the value of this.




// call() method

// The call() method is a predefined JavaScript method.

// It can be used to invoke (call) a method with an object as an argument (parameter).

// With call(), an object can use a method belonging to another object.


// const person = {
//     fullName: function () {
//         return this.firstName+ " " + this.lastName;
//     }
// }

// person1 = {
//     firstName: "shruti",
//     lastName: "shri"
// }

// person2 = {
//     firstName: "alex",
//     lastName: "alice"
// }
// console.log(person.fullName.call(person1))




// // call method with arguments
// const person = {
//     fullName: function (city, country) {
//         return `${this.firstName} ${this.lastName} ${city} ${country}`;
//     }
// }

// person1 = {
//     firstName: "shruti",
//     lastName: "shri"
// }

// person2 = {
//     firstName: "alex",
//     lastName: "alice"
// }
// console.log(person.fullName.call(person1, "bhopal", "ind"))






// apply() method

// With the apply() method, you can write a method that can be used on different objects.

// const person = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   const person1 = {
//     firstName: "Mary",
//     lastName: "Doe"
//   }
  
//   // This will return "Mary Doe":
//   person.fullName.apply(person1);



// The Difference Between call() and apply()
// The difference is:

// The call() method takes arguments separately.

// The apply() method takes arguments as an array.


// const person = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
  
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
  
//   person.fullName.apply(person1, ["Oslo", "Norway"])



// JavaScript Strict Mode
// In JavaScript strict mode, if the first argument of the apply() method is not an object, 
// it becomes the owner (object) of the invoked function. In "non-strict" mode, it becomes the global object.




// bind()

// With the bind() method, an object can borrow a method from another object.

// const person = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function () {
//       return this.firstName + " " + this.lastName;
//     }
// }
  
// const member = {
//     firstName:"Hege",
//     lastName: "Nilsen",
// }
  
// let fullName = person.fullName.bind(member);

// console.log(fullName)


// preserving this 

// const person = {
//     firstName: "shruti",
//     lastName: "shri",
//     display: function() {
//         let button = document.querySelector(".clickMe");
//         button.innerHTML = `${this.firstName} ${this.lastName}`;
//     }
// }
// setTimeout(person.display, 3000);
  

// When a function is used as a callback, this is lost.
// This example will try to display the person name after 3 seconds, but it will display undefined instead
// we tried to change the button content



// the bind() method is used to bind person.display to person

// const person = {
//     firstName: "shruti",
//     lastName: "shri",
//     display: function() {
//         let button = document.querySelector(".clickMe");
//         button.innerHTML = `${this.firstName} ${this.lastName}`;
//     }
// }
// let display = person.display.bind(person);
// setTimeout(display, 3000);
// // this works







