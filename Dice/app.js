const rollDiceBtn = document.querySelector(".dice__trigger")
const imgDice = document.querySelector(".dice__image")

rollDiceBtn.addEventListener("click", () => {
    var randomNumber = randomNumerFunc()
    imgDice.src = `images/dice${randomNumber}.png`
})


function randomNumerFunc(){
    return Math.floor(Math.random() * 6) + 1
}