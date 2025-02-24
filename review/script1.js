let value = document.querySelector("h2");
let num = value.textContent;


let reset = document.querySelector(".btnReset");

function resetCounter(){
    num = 0;
    value.textContent = 0;
    console.log(num);
}

reset.addEventListener("click", resetCounter);



let plus = document.querySelector(".add");

plus.addEventListener("click", function (){
    num++;
    value.textContent = num;
    console.log(num);
});



let minus = document.querySelector(".subtract");

minus.addEventListener("click", function() {
    if(num>0) {
        num--;
        value.textContent = num;
        console.log(num);
    }
});




















