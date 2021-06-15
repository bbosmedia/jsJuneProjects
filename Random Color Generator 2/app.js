const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector(".btn")

const body = document.querySelector("body")

const cardColor = document.querySelector(".color-name")

btn.addEventListener("click", () =>{


    let color = "#"
    for(var i = 0; i<6; i++){
        const number = randomNumber()
        color += colors[number]
    }
    body.style.backgroundColor = color;
    cardColor.innerText = color
})

const randomNumber = () =>{
    return Math.floor(Math.random() * colors.length);
}

