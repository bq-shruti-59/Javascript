// const myParagraph = document.createElement("p");
// console.log(myParagraph);


// There is no shortcut to create an element with a class or with a set attribute


// only way you can do it is here:
const myParagraph = document.createElement("p");
myParagraph.textContent = "This is my paragraph";
myParagraph.classList.add("special");
console.log(myParagraph);



// creating image tag
const myImage = document.createElement("img");
myImage.src = "https://media.istockphoto.com/id/2143731209/photo/lavender-flowers-close-up-on-sky-background.jpg?s=612x612&w=is&k=20&c=OjOvYXZ1A6PzWRgspy9XXgRJuk_vEV6dc3X1P2R5Xdc=";
myImage.alt = "flowers";
console.log(myImage);

// creating a div tag
const myDiv = document.createElement("div");
myDiv.classList.add("wrapper");
console.log(myDiv);

// now we got 3 elements
// para, img, div



// ADDING THE CREATED ELEMENTS TO DOM
// We use another API called appendChild. To use it, you have to first select an element to call .appendChild() against.

// If you want to add the element directly into the body, you can grab the document.body and insert it.

// document.body.appendChild(myDiv);
// myDiv.appendChild(myParagraph);
// myDiv.appendChild(myImage);


//prefer this 
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);



// append method
// avoid using it


// insertAdjacentElement method

// insertAdjacentElement is used to insert elements before, 
// after and inside other elements.



const heading = document.createElement('h2');
heading.textContent = 'cool';
// myDiv.appendChild(heading);
// // this makes h2 get inserted after image



// insertAdjacentElement() takes two parameters:

// the position of where you want to insert the element
// the element you want to insert.


myDiv.insertAdjacentElement('afterbegin', heading);













































