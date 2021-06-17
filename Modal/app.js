const modal = document.querySelector(".modal")
const closeBtn = document.querySelector(".close-btn")
const showBtn = document.querySelector(".show-btn")

closeBtn.addEventListener("click", () =>{
    modal.classList.remove("active")
})

showBtn.addEventListener("click", ()=>{
    modal.classList.add("active")
    
})
