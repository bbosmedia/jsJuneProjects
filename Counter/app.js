

const counterNumber = document.querySelector(".count-number")
const add = document.querySelector("#btn-add")
const minus = document.querySelector("#btn-minus")
const reset = document.querySelector("#btn-reset")

let number = 0;


add.addEventListener("click", ()=>{
    number++;
    showNumber(number)
})

minus.addEventListener("click", ()=>{
    number--;
    showNumber(number)
})

reset.addEventListener("click", ()=>{
    number = 0;
    showNumber(number)
})


function showNumber(number){
    if(number === 0){
        counterNumber.style.color = "#000";
    }else if(number < 0){
        counterNumber.style.color = "red";
    }else{
        counterNumber.style.color = "green";
    }

    counterNumber.innerText = number
}