//DOM Elements
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTodo);
// todoList.addEventListener('click', editBtn);

function addTodo(event)

{
    //prevent the form from submitting
    event.preventDefault();

    //add todo only when user enters something
    if(todoInput.value !== ''){
        
        //create wrapper div
        const todoDiv = document.createElement('div');
        todoDiv.className = 'todo';

        //create list element
        const newTodo = document.createElement('input');
        newTodo.className = 'todo-item';
        newTodo.value = todoInput.value;

        //my work

        // const newTodo1 = document.createElement('input');
        // newTodo1.className = 'todo-item1';
        // newTodo1.value = newTodo.innerText;

        // document.addEventListener("onclick", myFunction);

        //     function myFunction() {
        //         document.document.querySelector("todo-item1").value;
        //     }



        //add that list element inside of wrapper div
        todoDiv.appendChild(newTodo);
        todoInput.value = '';

        
    
        //create complete task button
        const completedBtn = document.createElement('button');
        completedBtn.innerText = `✔️`;
        completedBtn.classList.add('complete-btn');
        todoDiv.appendChild(completedBtn);

        //create trash button
        const trashBtn = document.createElement('button');
        trashBtn.innerText = `❌`;
        trashBtn.classList.add('trash-btn');
        todoDiv.appendChild(trashBtn);

        //create edit button
        
        // const editBtn = document.createElement('button');
        // editBtn.innerText = `Edit`;
        // editBtn.classList.add('edit-btn');
        // todoDiv.appendChild(editBtn);


        //Add wrapper div to ul
        todoList.appendChild(todoDiv);
    }
}

function deleteTodo(e)

{
    const item = e.target;

    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.classList.add('fade-away');

        todo.addEventListener('transitionend', e => {
            todo.remove();
        });
    }

    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        const todoItem = todo.querySelector('.todo-item');
        todoItem.classList.toggle('completed');

    }
}
// function editBtn(){
//     document.getElementsByClassName('todo-item').innerText= newtodo1.value;
// }



