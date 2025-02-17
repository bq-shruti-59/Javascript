
//----- DESTRUCTURING--------------------

const address = {
    street: '',
    city: '',
    country: ''
};


// to destruct values from the object
 
// const street = address.street;
// const city = address.city;
// const country = address.country;


//another easier method
const {street, city, country } = address;


// to assign another named variable
const { street: st} = address;





//------------ objects ------------------------

// singleton- apne tarah ka ek hi object hai
// creating object using constructor method, Object.create

// object literals


const mySymbol = Symbol("key1")

const jsUer = {
    name: "shruti",
    "full name": "shruti shrivastava",   //cannot be accessed with .
    [mySymbol]: "mykey1",
    age: 2342,
    location: "indore",
    email: "efw@gmail.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "tuesday"]
}

// console.log(jsUer.email)

// //or
// console.log(jsUer["email"])

// console.log(jsUer[mySymbol])
// console.log(typeof jsUer[mySymbol])     // gives a string without []


// // to update any value 
// jsUer.email = "shruti@gmail.com"
// console.log(jsUer.email)


// // to make value uneditable
// Object.freeze(jsUer)

// jsUer.name = "ss"
// console.log(jsUer)


jsUer.greetings = function(){
    console.log("hello js user")
}

jsUer.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`);
}

// console.log(jsUer.greetings)

// console.log(jsUer.greetings())
// console.log(jsUer.greetingTwo())




// // const tinderUser = new Object()     //singleton

const tinderUser = {}            //non singleton object

tinderUser.id ="122323"
tinderUser.name ="shruti"
tinderUser.isLoggedIn = false

// console.log(tinderUser)




const regularUser = {
    email: "a@gmail.com",

    fullname: {
        userfullname: {
            firstname: "shruti",
            lastname: "shrivastava"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

// console.log(regularUser.fullname?.userfullname.firstname)    // can use ? to check and proceed only if element exists



const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}    // creates object inside object

// const obj3 = Object.assign(obj1, obj2)  // merge two objects into new


//another method
// const obj3 = {...obj1, ...obj2}

// console.log(obj3)




const users = [
    {
        id: 1,
        name: "abc"
    },
    {
        id: 2,
        name: "xyz"
    },
    {
        id: 3,
        name: "vbn"
    },
    {
        id: 4,
        name: "iop"
    }

]

console.log(users[1].name)


console.log(tinderUser)

//creates an array of keys
console.log(Object.keys(tinderUser))

//creates an array of values
console.log(Object.values(tinderUser))



// to check if a certain property exists or not
console.log(tinderUser.hasOwnProperty('isLoggedIn'))