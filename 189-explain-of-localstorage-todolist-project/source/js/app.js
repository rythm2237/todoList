 //const { json } = require("express/lib/response");

let $ = document;
let newTodo = $.getElementById("itemInput");
let todoListElem = $.getElementById("todoList");
// buttons
let addBtn = $.getElementById("addButton");
let clearBtn = $.getElementById("clearButton");

let todosArrey = []

function clearTodos(){
    todosArrey= []
    todoGenerator(todosArrey)
    localStorage.removeItem('todos')
}
function addNewTodo(){
    if(newTodo.value != ""){
    let newActivity = {
        id: todosArrey.length + 1,
        title: newTodo.value,
        complete: false 
    }
    todosArrey.push(newActivity)
    setLocalStorage(todosArrey)
    newTodo.value = ""
    newTodo.focus()
}
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


// set the Enter key
newTodo.addEventListener("keydown", function(event){
    if (event.keyCode === 13){
        addNewTodo()
        getLocalStorage()
    }
})

function todoGenerator(todosList){
    let newLi, newLable, newDeleteBtn, newCompleteBtn
    todoListElem.innerHTML=""
    
    todosList.forEach(element => {
        newLi = $.createElement("li")
        newLi.className = "completed well"
        
        newLable = $.createElement('lable')
        newLable.innerHTML = element.title
        
        newCompleteBtn = $.createElement('button')
        newCompleteBtn.className = "btn btn-success"
        newCompleteBtn.innerHTML = "complete"
        newCompleteBtn.setAttribute("onclick", "completeItem(" + element.id + ")")
        
        newDeleteBtn = $.createElement('button')
        newDeleteBtn.className = "btn btn-danger"
        newDeleteBtn.innerHTML = "Delete"
        newDeleteBtn.setAttribute("onclick", "deleteItem(" + element.id + ")")
        
        if(element.complete){
            newLi.className = "uncompleted well"
            newCompleteBtn.innerHTML = "Uncomplete"
        }
 
        newLi.append(newLable, newCompleteBtn, newDeleteBtn)
        todoListElem.append(newLi)
    });
}

function completeItem(todosId){
    let localStorageData = JSON.parse(localStorage.getItem("todos"))
    todosArrey = localStorageData
    
    todosArrey.forEach(function(todo){
        if(todo.id === todosId){
            console.log(todosId)
            todo.complete = !todo.complete
        }
    })
    setLocalStorage(todosArrey)
    todoGenerator(todosArrey)
}

function deleteItem(todosId){
    let localStorageData = JSON.parse(localStorage.getItem("todos"))
    todosArrey = localStorageData
    
    let mainItem = todosArrey.findIndex(function(todos){
        return todos.id === todosId
    })
    
    todosArrey.splice(mainItem, 1)
    setLocalStorage(todosArrey)
    todoGenerator(todosArrey)

}    
    
    
    window.addEventListener('load', getLocalStorage)
    clearBtn.addEventListener('click', clearTodos)
    addBtn.addEventListener("click", function(){
        addNewTodo()
        getLocalStorage()
    })

