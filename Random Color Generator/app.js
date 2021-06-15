const colors = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#8e44ad", "#2c3e50", "#f1c40f", "#e67e22", "#e74c3c", "#95a5a6", "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"];

const btn = document.querySelector(".btn")

const body = document.querySelector("body")
body.style.backgroundColor = colors[5]

const cardColor = document.querySelector(".color-name")
cardColor.innerText = colors[5];

btn.addEventListener("click", () =>{
    const number = randomNumber()

    body.style.backgroundColor = colors[number];
    cardColor.innerText = colors[number];
})

const randomNumber = () =>{
    return Math.floor(Math.random() * colors.length);
}

