const name = "shruti"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('sshhrruutt-ii')

// console.log(gameName[0])

// console.log(gameName.__proto__);

console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));

console.log(gameName.indexOf(`i`));

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(2, 4)     // starts counting -1 in negative direction toh get starting index

console.log(anotherString)


const newStringOne = "    shruti     "
console.log(newStringOne);
console.log(newStringOne.trim());   // removes the spaces and line terminators 


const url = "https://shrutis.com/shruti%20shrivastava"

console.log(url.replace('%20', '-'));   //used to replace characters from strings

console.log(url.includes('shruti'))     // to check if a word exists


// to convert a string into an array based on spaces or hyphen.
console.log(gameName.split('-'));

