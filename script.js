
const inputBox=document.getElementById("inputBox")
const addBtn=document.getElementById("addBtn")
const todoList=document.getElementById("todoList")

let editTodo=null;
const addTodo=()=>{
    const inputText=inputBox.value.trim();
    if(inputText.length<=0){
        alert("You must write Something in your to do")
        return false
    }

    if(addBtn.value==="Edit"){
        editTodo.target.previousElementSibling.innerHTML=inputText;
        addBtn.value="Add";
        inputBox.value="";
    }
    else
    {

    
   
    const li=document.createElement("li");
    const p=document.createElement("p");
    p.innerHTML=inputText;
    li.appendChild(p)

    const editBtn=document.createElement("button")
    editBtn.innerText="Edit"
    editBtn.classList.add("btn","editBtn");
    li.appendChild(editBtn);

    //delete button creation steps

    const deleteBtn=document.createElement("button")
    deleteBtn.innerText="Remove"
    deleteBtn.classList.add("btn","deleteBtn");
    li.appendChild(deleteBtn);

    //edit button creation steps
    
    
    todoList.appendChild(li);
    inputBox.value="";
    saveLocalTodos(inputText);
    }

}

const updateTodo=(e)=>{
    if(e.target.innerHTML==="Remove"){
        todoList.removeChild(e.target.parentElement);
    }
    if(e.target.innerHTML==="Edit"){
        inputBox.value=e.target.previousElementSibling.innerHTML;
        inputBox.focus();

        addBtn.value="Edit";
        editTodo=e;
    }

}

const saveLocalTodos=function(todo){
let todos=[];
if(localStorage.getItem("todos")===null){
    todos=[];
}
else{
    todos=JSON.parse(localStorage.getItem("todos"));
}
todos.push(todo);
localStorage.setItem("todos",JSON.stringify(todos));
}

const getLocalTodos=()=>{
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
        todos.forEach(todo=>{
            
        })
    }
}

addBtn.addEventListener('click',addTodo)
todoList.addEventListener('click',updateTodo)




