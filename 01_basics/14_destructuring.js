//----------------DESTRUCTURING--------------------
// done to extract properties from an object


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






// let article = {
//     id: 736,
//     title: "object destructuring",
//     writer: "shruti"
// };

// extracting properties without destructuring would be complex like this
// let id = article.id;
// let title = article.title;
// let writer = article.writer;

// // destructuring makes property extraction easy 
// let {id, title, writer} = article

// console.log(id)
// console.log(title)
// console.log(writer)


// if we want to change the variable name 
// let{id: myid, title: mytitle, writer: mywriter} = article

// console.log(myid)
// console.log(mytitle)
// console.log(mywriter)



// Destructuring types
// 1 nested object destructuring
// 2 destructuring function arguments 
// 3 destructuring with default values
// 4 destructuring null objects
// 5 using rest parameter 
// 6 assigning dynamic object keys
// 7 combined object and array destructuring 


// // 1 nested object destructuring
// let article = {
//     id: 342,
//     title: "nested destructuring",
//     writer: {
//         name: "shruti"
//     }
// };

// let {
//     id: myid,
//     title: mytitle,
//     writer: {
//         name: myname
//     }
// } = article;

// console.log(myid)
// console.log(mytitle)
// console.log(myname)




// // 2 destructuring function arguments

// // //normal
// // let article = {
// //     title: "destructuring function arguments",
// //     writer: "shruti"
// // }

// // let displayDetails = (article)=> {
// //     console.log(article.title);
// // }

// // displayDetails(article);

// //destructuring through function arguments

// let article = {
//     title: "destructuring function arguments",
//     writer: "shruti"
// }

// let displayDetails = ({title, writer}) => {
//     console.log(title)
//     console.log(writer)
// }

// displayDetails(article)




// // 3 destructuring with default values


// // when a declared parameter is absent
// // let article = {
// //     title: "destructuring default vales",
// //     writer: "shruti"
// // }

// // let {title, subtitle = "No subtitle here", writer} = article

// // console.log(title)
// // console.log(subtitle)
// // console.log(writer)


// // when that parameter is present
// let article = {
//     title: "destructuring default values",
//     subtitle: "i have subtitle",
//     writer: "shruti"
// }

// let {title, subtitle = "no subtitle", writer} = article

// console.log(title)
// console.log(subtitle)
// console.log(writer)




// 4 destructuring null objects


// function getArticle() {

//     let article = {
//         title: "destructuring null object",
//         subtitle: "subtitle here"
//     }
//     return article
// }

// let {title, subtitle} = getArticle();

// console.log(title)
// console.log(subtitle)

//there can be scenarios where the returned object is null. 
// In such situations, we need to modify the object destructuring statement to handle null objects. 
// If not, the application will throw a TypeError.


function getArticle(){
    return null;
}

// let {title, subtitle} = getArticle();    //gives type error

let {title, subtitle} = getArticle() || {};

// console.log(title)
// console.log(subtitle)    // gives undefined

/*
How Does || {} Work?
getArticle() returns null.

The || (logical OR) operator returns the first truthy value.

Since null is falsy, JavaScript evaluates the expression as:

null || {}
Since {} (an empty object) is truthy, it is used as the fallback value.

Now, destructuring happens on {}, which does not contain title or subtitle, 
but no error occurs. Instead, title and subtitle will be undefined.
*/



// // 5 using rest parameter 

// // rest parameter (...) allows functions to accept a number of arguments as an Array

// let languages = {
//     language1: "java",
//     language2: "cpp",
//     language3: "python",
//     language4: "js",
//     language5: "ruby"
// }

// let{language1, language2, ...otherLanguages} = languages;

// console.log(language1)
// console.log(language2)
// console.log(otherLanguages)




// // 6 assigning dynamic object keys

// let users = {
//     alex: "software engineer",
//     michael: "design lead",
//     nike: "team lead"
// }

// let userKey = "alex";
// let{[userKey]: selecteduser} = users;

// console.log(selecteduser)




// 7 combined object and array destructuring

let languages = [
    {id: 1, name: "shruti"},
    {id: 2, name: "alex"},
    {id: 3, name: "courtney"},
    {id: 4, name: "jack"},
    {id: 5, name: "paul"}
]

let [, , {name}, , ] = languages;
console.log(name)

// use commas to skip elements of the array and only get the required elements.