// const p = document.querySelector("p")
// console.log(p)


// function init() {
//     const p = document.querySelector("p");
//     console.log(p);
// }

// console.log(document.addEventListener('content loaded', init))


//two main ways of selecting elements

// querySelector()
// querySelectorAll()
// querySelectorAll() will give you multiple elements, 
// whereas querySelector() will give you the first matching one.



// const p = document.querySelector("p");
// const divs = document.querySelectorAll("div");
// console.log(p)
// console.log(divs)


/*
here queryselectorall returns a nodelist
it looks like array 
but node list is not an array
it does not have all the methods that an array does like map, filter and reduce built into it.
*/

// console.log(document.querySelector(".item"))
// console.log(document.querySelectorAll("div .item"));


// // searching inside selected element
// let search = document.querySelector(".container")
// console.log(search.querySelector("h4"))



// if you're using anything that's not query selector, you don't have to pass . or #



// const heading = document.querySelector("h2");
// console.log(heading);   // shows element
// console.dir(heading);   // shows element object with lots of properties


// outerText textContent outerHTML
// We can use those properties as getters to get the data from the element that we need, 
// or we can use them as setters.

// console.dir(heading.textContent);    // to get the text content

// heading.textContent = "wes is cool";    // to change the inner text
// console.dir(heading.textContent);


// innerText and textContent
// textContent and innerText are very similar properties, textContent is the newer one.
// The only difference is that 
// innerText returns only the human readable content 
// whereas 
// textContent will get the contents of all of the elements, including script and style elements. + hidden elements


// const heading = document.querySelector("h2");
// console.log(heading.innerText);
// console.log(heading.textContent);   // shows style as well




// textContent returns every element in the node.

// innerText is aware of styling and won't return text of hidden elements.


// // innerHTML and outerHTML
// console.log(heading.innerHTML);
// console.log(heading.outerHTML);



// const pizzalist = document.querySelector(".pizza");
// console.log(pizzalist.textContent);

// // updating text
// pizzalist.textContent = `${pizzalist.textContent} new`;
// // That method can be slow in some applications that have lots of text and html, 
// // because it causes the browser to re-render the entire list.




// To fix that, what we can do is add text onto the end using a different method
// insertAdjacentText() and insertAdjacentElement()
// give us the ability to add stuff to the back or the front of it



// It takes two arguments:

// the position (beforebegin, afterbegin, beforeend, afterend)
// the text that you want to pass it.

// pizzalist.insertAdjacentText('beforeend', 'added');

// pizzalist.insertAdjacentText('beforebegin','🍕');// adds before the begin of p tag

// Nodes can be anything, but an actual element is something that is wrapped in a tag.


// const pic = document.querySelector(".nice");
// console.log(pic.classList);


// classList has many methods.

// add
// remove
// contains
// foreach.

// // adding a class
const pic = document.querySelector(".nice");
// pic.classList.add("open");
// console.log(pic.classList);


// //removing a class
// pic.classList.remove("cool");
// console.log(pic.classList);


// //toggle a class
// pic.classList.toggle("round");  // works in console

// function toggleRound() {
//     pic.classList.toggle("round");
// }
// pic.addEventListener("click", toggleRound);



// //contains() method
// It will return a boolean value of true or false 
// based on whether that element has the class or not.

// console.log(pic.classList.contains("open"));



//ATTRIBUTES
// Attributes are anything provided to an element as additional information.
// classes, src, alt

pic.alt = "flowers";    //setter
console.log(pic.alt);   //getter


// some attributes are only getters
// console.log(pic.naturalWidth);  // gives 0
// but if we write same line in console it gives a different answer.
// we have to wait for the image to actually be downloaded for us to know how large it is.

// to overcome this problem
// we can use event listener

// pic.addEventListener("load", function(){
//     console.log(pic.naturalWidth);
// });

// putting the script at the bottom of the HTML page waits for all the HTML to be loaded. However, 
// if the HTML goes ahead and makes additional requests like downloading images, it doesn't wait for those.



// getAttribute() and setAttribute()
console.log(pic.getAttribute("alt"));
pic.setAttribute("alt", "100 flowers");
console.log(pic.getAttribute("alt"));


// hasAttribute()
// which will return true or false based on whether that attribute is set on an element or not

console.log(pic.hasAttribute("alt"));

// setAttribute() will also work for things that are non-standard.

// We have HTML as a spec, and you have all of your standard attributes in the spec like alt, title, width, src, and all of those things.

// But if you want to set an attribute that is non standard, you can use setAttribute to make something.



// data attributes
// when you want to use your own custom attributes
// you can delcare any attribute with data-
// example: data-dog, data-name, data-description

// to access data attributes        
// const custom = document.querySelector(".nice");
// console.log(custom.data);               // returns undefined


const custom = document.querySelector(".nice");
console.log(custom.dataset); 


// data-name shows up as the name property in our object, 
// and if we had multiple data attributes on the same image,  
// they would both be present in the object.



// This is useful because we can do things like listen for a click on an element, 
// and when someone clicks on it, we can alert them.




// PRACTICE AGAIN
// custom.addEventListener("click", function(){
//     alert(`welcome ${custom.dataset.name}`);
// });














