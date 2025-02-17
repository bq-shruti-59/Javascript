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

;(function (){
    console.log(`DB Connected`);
})();

// ; is necessary for it to know where the function starts and ends

(() => {
    console.log(`DB Connected neww`);
})();


// passing parameter in IIFE

((name) => {
    console.log(`DB Connected neww ${name}`);
})("shruti");