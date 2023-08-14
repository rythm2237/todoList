let $ = document;
let newTodo = $.getElementById("itemInput");
let ul = $.getElementById("todoList");

// buttons
let addBtn = $.getElementById("addButton");
let clearBtn = $.getElementById("clearButton");
let doneBtn = $.querySelector(".btn-success");
let deleteBtn = $.querySelector(".btn-danger");
let todosArrey = []


deleteBtn.addEventListener('click',function(){
    alert('yes')
})
function addNewTodo(){

    let newActivity= {
        id: todosArrey.length + 1,
        title: newTodo.value,
        complete: false 
    }

    todosArrey.push(newActivity)
    setLocalStorage(todosArrey)

    console.log(todosArrey)
    
    

    let newLi = $.createElement("li")
    newLi.className = "completed well"
    newLi.innerHTML = `<label>${newActivity.title}</label>
    <button class="btn btn-success">Complete</button>
    <button class="btn btn-danger">Delete</button>`
    
    ul.append(newLi)
    newTodo.value = ""

    // deleteBtn.addEventListener("click", function(event){
    //     console.log(event.target.parentElement)
    // })
}

function setLocalStorage(newTodosList){
    localStorage.setItem("todos", JSON.stringify(newTodosList))
}

addBtn.addEventListener("click", addNewTodo)
newTodo.addEventListener("keydown", function(event){
    if (event.keyCode === 13){
        addNewTodo()
    }
})



