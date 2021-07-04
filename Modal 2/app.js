const openModal = document.querySelector(".trigger")
const closeModal = document.querySelector(".close")

openModal.addEventListener("click", () =>{
    document.querySelector(".modal").classList.add("open")
})

closeModal.addEventListener("click", ()=>{
    document.querySelector(".modal").classList.remove("open")
})


window.addEventListener("click", (e) =>{
    if(e.target === document.querySelector(".modal"))
    document.querySelector(".modal").classList.remove("open")
})