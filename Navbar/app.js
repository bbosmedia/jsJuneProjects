const menuBar = document.querySelector(".navbars")
const middleNav = document.querySelector(".middle-nav")


menuBar.addEventListener("click", ()=>{
    console.log("click")
    menuBar.classList.toggle("active")
    middleNav.classList.toggle("active")
})