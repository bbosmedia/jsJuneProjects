const haburger = document.querySelector(".hamburger")

const navMenu =  document.querySelector(".nav")

const contentEl = document.querySelector(".content")


haburger.addEventListener("click", () => {
    navMenu.classList.toggle("open")
    contentEl.classList.toggle("shift")
    haburger.classList.toggle("change")

})