// const myObj = {
//     myFunction: function () {
//         console.log(`Here is my function`);
//     }
// }

// myObj.myFunction();




// // object destructuring types

// //1st 
// let obj = {
//     firstname: "shruti",
//     lastname: "shri",
//     id: 5236
// }

// let {firstname, lastname, id} = obj;


// // for changing variable name

// let{firstname: fn, lastname: ln, id: myid} = obj;

// console.log(fn);
// console.log(ln);
// console.log(myid);


// // destructuring for default value
// let obj2 = {
//     fname: "shruti",
//     lname: "shri",
//     ID: 5236
// }

// let {fname, lname, place = "ind", ID} = obj2;

// console.log(fname);
// console.log(lname);
// console.log(place);
// console.log(ID);




// // destructuring for null values
// function example() {
//     return null;
// }

// let {myage, gender} = example() || {};



// // destructuring functional arguments
// let page = {
//     title: "destructuring",
//     name: "shruti"
// }

// let displayDetails = ({title, name}) => {
//     console.log(title);
//     console.log(name);
// }

// displayDetails(page)









const person = {
    name: "Shruti",
    age: 22,
    dob: "random",
    address: "Bhopal"
}

// first basic destructing
let {name, age, dob, address} = person;
console.log(name);
console.log(age);
console.log(dob);
console.log(address);


// values
console.log(Object.values(person));

// key
console.log(Object.keys(person));

// key : value pair 

for (const detail in person) {
    let print = `${detail}: ${person[detail]}`;
    console.log(print);
}

// console.log(`${Object.keys(person)}, ${Object.values(person)}`);


