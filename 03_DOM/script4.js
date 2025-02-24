// HTML from strings and XSS

// The main security flaw with this method is something called XSS which stands for cross-site scripting.

const item = document.querySelector(".item");
console.log(item.innerHTML);    // getter

item.innerHTML = `<h1>Hey how are you doing</h1>`;
console.log(item.innerHTML);

// gives you the ability to easily interpolate values.


// const src = `https://picsum.photos/200`;
// const desc = "cute pup";
// const myHtml = `
//     <div>
//         <h2>${desc}</h2>
//         <img src="${src}" alt = "${desc}"/>
//     </div>
// `;



// interpolating the width variable in src

const width = 200;
const src = `https://picsum.photos/${width}`;
const desc = "cute pup";
const myHtml = `
    <div>
        <h2>${desc}</h2>
        <img src="${src}" alt = "${desc}"/>
    </div>
`;
item.innerHTML = myHtml;
console.log(item.innerHTML);

// one of the downsides to using this method to insert HTML
//  is that the contents of the myHTML variable are not elements, they are just strings.

console.log(typeof myHtml); // gives string

// myHtml.classList.add("special");    // add of undefined
// log myHTML.classList, you will see that it is also undefined.

// Why?

// Because it is only a string.


// to add a class to the image within myHTML.

// const itemImage = document.querySelector('div .image');
// itemImage.classList.add("round");        // not working






// document.createRange() and document.createFragment()

const myFragment = document.createRange().createContextualFragment(myHtml);
console.log(myHtml);

// create range creates a range,
// A range is essentially a collection of elements or part of HTML that we can then work with

// creating fragment
// from within this fragment, we are able to access all of the elements that live inside of it.

myFragment.querySelector("img");
document.body.appendChild(myFragment);




// cross-site scripting.

// XSS is where people try to insert script tags using a method like entering an HTML string in a text input such as your profile name.

// The browser will then run the script tag, and you can do anything you want with that, like drain someone's bank account.








//-------------- TRAVERSING & REMOVING NODES-----------

const wes = document.querySelector(".wes");
console.log("wes");

console.log(wes.children);

console.log(wes.children[1]);
console.log(wes.childNodes);


// Everything in our NodeList in the console is a Node, and if it is wrapped in a tag, it is also an element


// console.log(wes.firstElementChild);
// console.log(wes.lastElementChild);
// console.log(wes.previousElementSibling);
// console.log(wes.nextElementSibling);
// console.log(wes.parentElement);
// console.log(wes.children);




// removing elements 

// select element in element pane and then,
// $0.remove()




const p = document.createElement("p");
p.textContent = "i will be removed";
document.body.appendChild(p);
p.remove();













