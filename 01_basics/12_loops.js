// for , while , do while


//---------------------- FOR -----------------------------

// for (let i = 0; i < 10; i++){
//     const element = i;
//     console.log(element);
// }


// for (let i = 0; i < 10; i++){

//     console.log(`Outer loop ${i}`)
//     for (let j = 0; j < 10 ; j++){
//         console.log(`Inner loop ${j} and outer loop ${i}`)
//     }
// }


// let myArray = ["a", "b", "c", "d", "e", "f", "g"]

// for(let i=0; i < myArray.length; i++){

//     const element = myArray[i];
//     console.log(element);
// }



// break and continue

// for (let index = 1; index <= 20; index++){

//     if(index == 5){
//         console.log(`Detected 5`);
//         break;      // breaks the loop
//     }

//     console.log(`Value of i is ${index}`);
// }


// for (let index = 1; index <= 20; index++){

//     if(index == 5){
//         console.log(`Detected 5`);
//         continue;      // skips the present iteration execution and moves to next iteration
//     }

//     console.log(`Value of i is ${index}`);
// }




//------------------- WHILE and DO WHILE ----------------------



// let index = 0;

// while (index <= 10){
//     console.log(`Value is ${index}`);
//     index += 2;
// }



// let myArray = ["a", "b", "c", "d", "e"];

// let arr = 0;

// while(arr < myArray.length){
//     console.log(`Vlaue is ${myArray[arr]}`)
//     arr++;
// }




// let score = 11;

// do {
//     console.log(`Score is ${score}`)
//     score++;
// } while (score <= 10);




//---------------- HIGHER ORDER ARRAY LOOPS------------------


// for of 

// const arr = [1, 2, 3, 4, 5]; 

// for (const num of arr) {
//     console.log(num);
// }


// const greetings = "Happy days"
// for (const greet of greetings){
//     console.log(`Each chat is ${greet}`)
// }



//-------------- MAPS ----------------------------



// const map = new Map()

// map.set('IN', "India")
// map.set('USA', "United states of america")
// map.set('UAE', "United arab emirates")

// console.log(map);

// // maps contain unique values only
// // maps store values in key, pair 

// // for (const key of map) {
// //     console.log(map)
// // }


// for (const [key, value] of map){
//     // console.log(key, ":- ", value)
// }

// const myObj = {
//     'game1': "hockey",
//     'game2': "basketball"
// }

// for (const [key, value] of myObj) {
//     console.log(key, ":- ", value)
// }

// for of loop does not work on objects to iterate 




//------------ for in ----------------------------
// for in loop works on objects to iterate

const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

// for (const key in myObject) {
//     console.log(key)
// }


// for (const key in myObject) {
//     console.log(myObject[key])
// }


// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`)
// }


const programming = ["js", "rb", "py", "java", "cpp"]

// for(const key in programming){
//     console.log(key)
// }


// for (const key in programming) {
//     console.log(programming[key])
// }


// maps are not iteratable using for in loop




//--------------------- for each ----------------------

const coding = ["js", "ruby", "java", "python", "cpp"]

// for each loop requires a callback function
// coding.forEach(function (val){
//     console.log(val)
// })


// coding.forEach((item) => {
//     console.log(item)
// })


// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)



// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })


const myCoding = [
    {
        languageName: "js",
        languageFileName: "js"
    },
    {
        languageName: "cpp",
        languageFileName: "cpp"
    },
    {
        languageName: "html",
        languageFileName: "html"
    }
]

// myCoding.forEach((item) => {
//     console.log(item.languageFileName)
// })





//--------------------- filter ------------------------------

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((num) => (num > 4));

console.log(newNums)

