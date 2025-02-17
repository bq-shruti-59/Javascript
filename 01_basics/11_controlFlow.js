// if , if else, switch, 

// operators used in conditions
// <, >, =, ==, <=, >=, ===, !, !=



//IF 
// const isLoggedIn = true;

// if(isLoggedIn){
//     // console.log("yes")
// }
// console.log("temp")



//IF - ELSE

// const temp = 30

// if(temp == 41){
//     console.log("yes its 30")
// }
// else{
//     console.log("no its not 30")
// }



// const score = 300

// if(score > 100){
//     let power = "swim"
//     console.log(`User power: ${power}`)
// }
// console.log(`user power is ${power}`)   // this will not work



// const balance = 1000

// if(balance < 500){
//     console.log("less than 500")

// }else if(balance < 750){
//     console.log("less than 750")

// }else if(balance <900){
//     console.log("less than 900")

// }else{
//     console.log("balance is greater")
// }



// const userLoggedIn = true
// const debitCard = true

// if(userLoggedIn && debitCard){
//     console.log("allow for course")
// }


// const google = true
// const email = false

// if(google || email){
//     console.log("Yes !!")
// }



//-------------------SWITCH--------------------------------------


// const month = 2

// switch (month) {
//     case 1:
//         console.log("january")
//         break;
    
//     case 2:
//         console.log("Feb")
//         break;

//     case 3:
//         console.log("march")
//         break;

//     default:
//         break;
// }
// break helps to stop the execution of next case



// truthy values

// const userEmail = "ss@gmail.com"
// const userEmail = ""
// const userEmail = []


if(userEmail){
    console.log("got user email")
}
else{
    console.log("no email")
}


// falsy values : 
// false, 0, -0, BigInt On, "", null, undefined, NaN

// truthy values
// "0", "false", " ", [], {}, function(){}
