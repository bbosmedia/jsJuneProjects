const todoList = document.querySelector(".todo__list")

const inputItem = document.querySelector(".todo__input")

document.querySelectorAll(".todo__item")

let todos = [
    "Do your laundry",
    "Make youtube video",
    "Edit video content"
]


inputItem.addEventListener("keypress", (e)=>{
    if(e.keyCode === 13){
        todos.push(e.target.value)
        loadItems()
    }
})





function loadItems(){
    let items = ""

    todos.forEach(item => {
        items += '<li class="todo__item">' + item + '</li>';
    })

    todoList.innerHTML = items
    inputItem.value = ""
    removeItem()
}

loadItems()

function removeItem(){

    document.querySelectorAll(".todo__item").forEach(todoItem => {
        todoItem.addEventListener("dblclick", (e) => {
            e.preventDefault()
            todos = todos.filter(todo => todo !== todoItem.textContent)
            loadItems()
        })
    })
}

removeItem()