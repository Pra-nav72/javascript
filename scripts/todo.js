const todo = [{name:'', dueDate:''},];

//calling renderTodo() first time
renderTodo();

// it will create a <p> with the todo[] elements and render it to the page
function renderTodo(){
    let todoHTML = '';
    for (let i = 0; i<todo.length; i++){
        const todolistObject = todo[i];

        // const name = todolistObject.name;
        // const dueDate = todolistObject.dueDate;
        //Destructuring
        const { name, dueDate } = todolistObject;

        if (todolistObject.name!=''){

            // delete button inside <p> which will remove the current element from the array
            const html = `
                <div>${todolistObject.name}</div>
                <div>${todolistObject.dueDate}</div>
                <button onclick="
                    todo.splice(${i}, 1);
                    renderTodo();    
                ">Delete</button>
            `;
            todoHTML += html;
        }
    
    }
    
    //displaying on page
    document.querySelector('.js-todo-div').innerHTML = todoHTML;
}

// when add button clicked this will execute
function addTodo(){
    const inputElement = document.querySelector('.js-input-todo1');
    const todoName = inputElement.value;


    const dateElement = document.querySelector('.js-due-date-input');
    const todoDate = dateElement.value;

    todo.push({name: todoName, dueDate: todoDate});
    console.log(todo);
    // we can't write todoName here, it will give error.
    inputElement.value = '';
    

    //calling this function to render all elements of todo[] on page
    renderTodo();
}

// this will execute when user press 'Enter' key from keyboard
function addTodoKey(event){
    if (event.key === 'Enter'){
        console.log('Enter Key Pressed! ');
        addTodo();
    }
}