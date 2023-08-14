// const { json } = require("express/lib/response");

let $ = document;
let newTodo = $.getElementById("itemInput");
let ul = $.getElementById("todoList");

// buttons
let addBtn = $.getElementById("addButton");
let clearBtn = $.getElementById("clearButton");
let doneBtn = $.querySelector(".btn-success");
let deleteBtn = $.getElementById("delete");



// Buttons function

// deleteBtn.addEventListener('click',function(){
//     if(deleteBtn){

//         alert('yes')
//     }
// })


let todosArrey = []



function addNewTodo(){

    let newActivity= {
        id: todosArrey.length + 1,
        title: newTodo.value,
        complete: false 
    }
    todosArrey.push(newActivity)
    setLocalStorage(todosArrey)
    
    newTodo.value = ""

}

function setLocalStorage(newTodosList){
    localStorage.setItem("todos", JSON.stringify(newTodosList))
}

function getLocalStorage(){
    let localStorageData = JSON.parse(localStorage.getItem("todos"))
    if(localStorageData){
        todosArrey = localStorageData
    } else{
        todosArrey = []
    }
    todoGenerator(todosArrey)
}

window.addEventListener('load', getLocalStorage)


newTodo.addEventListener("keydown", function(event){
    if (event.keyCode === 13){
        addNewTodo()
        getLocalStorage()
    }
})

function todoGenerator(todo){
    ul.innerHTML=""
    todo.forEach(element => {
        
        let newLi = $.createElement("li")
        newLi.className = "completed well"
        newLi.innerHTML = `<label>${element.title}</label>
        <button class="btn btn-success">Complete</button>
        <button class="btn btn-danger">Delete</button>`
        
        ul.append(newLi)
    });
}





