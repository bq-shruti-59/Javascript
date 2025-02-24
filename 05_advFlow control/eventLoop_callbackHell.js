// in JavaScript is non-blocking (asynchronous)
// JavaScript is a single threaded language, meaning that only one thing can be run at a time

// console.log('Starting');

// setTimeout(function() {
//     console.log("running");
// }, 2000);

// console.log('ending');

// gives 
// starting 
// ending
// running

// That is what is referred to as the call stack.
// we know that the call stack can only ever run one function at a time.

// JavaScript is asynchronous.
// that means JavaScript won't stop running that code, instead it will put it off in what we call the web API,
//  and when that comes back after two seconds, it is going to stick it in the callback queue.

// When the call stack has a free second, when it's not currently running anything, 
// it is going to reach into the callback queue, grab the callback and run it for us.

// If the call stack has nothing else to do at the time, it will reach into the queue and grab the next thing.

// The Web Apis are things that are waiting or things that we are listening for like event handlers


// console.log('Starting');
// setTimeout(function() {
//     console.log('Running');
// }, 0);
// console.log("ending");
// it still shows starting ending running


// console.log("starting");

// setTimeout(function() {
//     console.log("running");
// }, 2000);

// setInterval(function (){
//     console.log("repeat");
// }, 100);

// console.log("ending");


// starting ending repeat running repeattttt



// task

// change the text to GO when clicked
// Make it a circle after 2 seconds
// Make it red after 0.5s
// make it a square after 0.25 seconds
// make it purple after 0.3s
// fade out after 0.3s


// The currenttarget property refers to the element whose event listener triggered the event, 
// opposed to the target property, which returns the element that triggered the event.

let go = document.querySelector(".go");

go.addEventListener("click", function (event) {
    const el = event.currentTarget;
    console.log(el);

    el.textContent = 'GO!';

    setTimeout(function() {
        el.classList.add("circle");

        setTimeout(function() {
            el.classList.add('red');

            setTimeout(function () {
                el.classList.remove('circle');

                setTimeout(function () {
                    el.classList.remove('red');
                    el.classList.add('purple');

                    setTimeout(function () {
                        el.classList.add('fadeOut');

                    }, 300);

                }, 300);

            },250);

        }, 500);

    }, 2000);
    
});

// if you look at the code the way it is now, that is what is referred to as callback hell.
// Callback hell is when you nest things inside of each other because they all depend on the 
// previous callback to being called before it can then go ahead and run, when you need to run things in sequence, one after the other.

// The solution to call-back hell is the "promise" land





















