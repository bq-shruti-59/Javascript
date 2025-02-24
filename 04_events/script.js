// EVENT LISTENER

const btn = document.querySelector(".btn");


// Event listeners will usually take two arguments:

// what the type of event is that you want to listen to
// a callback function



// There are three steps with event listeners:

// Go get something
// Listen for something (such as a click)
// Do something



// btn.addEventListener("click", function(){
//     console.log("it got clicked");
// });



//other way 
function handleClick() {
    console.log("it got clicked");
}

btn.addEventListener("click", handleClick);

// If you try to run the code with handleClick() instead of handleClick and 
// refresh the page, you will see the message "IT GOT CLICKED" in the console before we ever click the button.


const coolbtn = document.querySelector(".cool");

coolbtn.addEventListener("click", handleClick);



// removing event listener

// removeEventListener() takes 2 arguments:

// the event
// the function



coolbtn.removeEventListener("click", handleClick);
// If you refresh the HTML page, you will see the event listener no longer works.

// That is called unbinding.



// A binding essentially means taking a function and listening for a specific click within an element.

// If we had done an anonymous function, we couldn't have removed the click handler.
// If you ever in the future need to remove an event listener, remember not to use an anonymous function.




// adding event listener with arrow function

const yay = () => console.log("yay");

coolbtn.addEventListener("click", yay);
// The hooray function is technically an anonymous function, but because we have stored it in a variable, 
// it will infer the function from the variable name and we can still reference it because it's stuck in a variable.



// listening to events on multiple elements

const buyButtons = document.querySelectorAll("button.buy");

function buyItem() {
    console.log("buying items");
}

//buyButtons.addEventListener("click", buyItem);  // gives error
// The error is telling us that the buyButtons does not have the method addEventListener.

console.dir(buyButtons);
// you will se no addeventlistener method

console.dir(btn); 
// you can see addeventlistener method


// If you want to add the event listener to all the buy buttons, 
// you have to loop over and for each element attach it individually.




// You may have noticed that in the buyButtons prototype, there was a method called forEach. 
// That is going to allow us to loop over each of the items.

// buyButtons.forEach(function(BuyButton){
//     console.log("binding the buy button");
//     BuyButton.addEventListener("click",buyItem);
// });
// // this was an annonymous function
// issue is of unbinding



// function handleBuyButtonClick(buyButton){
//     console.log("binding the buy button");
//     buyButton.addEventListener("click", buyItem);
// }

// buyButtons.forEach(handleBuyButtonClick);




// using annonymous function
buyButtons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log("you clicked button");
    })
})
















