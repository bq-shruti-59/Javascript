// console.log("hello")

// window.console.log("hello2")

// console.dir(document.body)

// console.dir(document.body.childNodes[1])

// document.body.style.background = "green"
// document.body.childNodes[3].innerText = "abcd"

// let heading = document.getElementById("heading")
// console.dir(heading)

// let headings = document.getElementsByClassName("myclass")
// console.dir(headings)
// console.log(headings)
//returns HTML collection

// when an id element is not present, prints null
// when a class element is not present, prints empty collection


// let para = document.getElementsByTagName("p")
// console.log(para)

let firstEle = document.querySelector("p"); //gets only 1st element
// console.dir(firstEle)

let allEle = document.querySelectorAll("p"); //to get all elements
// console.dir(allEle)


let firstClassEle = document.querySelector(".myclass"); //gets only 1st element
// console.dir(firstClassEle)

let allClassEle = document.querySelectorAll(".myclass"); //to get all elements
// console.dir(allClassEle)


let IdEle = document.querySelector("#myId"); //gets only 1st element
console.dir(IdEle)

// querryselectorall is not valid for id, because IDs are unique



//PROPERTIES
// tagname: returns tag for elements Node
// innerText: returns text content of element and all its children
// innerHTML: returns plain text or HTML contents in the element
// textContent: returns text content even for hidden elements 

// console.log(firstEle.tagName)

// console.log(firstEle.innerText)

// nodes-> firstChild
//      -> lastChild

// console.dir(document.body.firstChild) // gives text, by default text node comes first

// DOM tree has    - text Nodes
//                 - comment nodes
//                 - element nodes


// let showDiv = document.querySelector("div")
// console.dir(showDiv)

// let showDivChildren = document.querySelector("div").children;
// console.log(showDivChildren)



let div = document.querySelector("div")
console.dir(div)

console.log(div.innerText)
console.log(div.innerHTML)

// div.innerText = "edidhu"    // replaces the entire text within the div
// div.innerHTML = "<div>new</div>"

let heading = document.querySelector("h1")
console.log(heading)

console.log(heading.innerText)

console.log(heading.textContent)


