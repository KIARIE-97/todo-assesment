document.addEventListener('DOMContentLoaded', () => {

// const task = document.querySelector('.create_task');
const taskList = document.querySelector('.All');
const completedTask = document.querySelector('.Completed');
const forms = document.forms
const addTodo = forms['create_task'];

//add tasks

addTodo.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = addTodo.querySelector('input[type="text"]').value;
    // create elements
    const div = document.createElement('div');
    const completeBtn = document.createElement('radio');
    const taskName = document.createElement('text');
    // const completeBtn = document.createElement('span');
    // add text content
    taskName.textContent = value;
    // deleteBtn.textContent = 'delete';
    // completeBtn.textContent = 'completed';
    // add classes
    taskName.classList.add('text');
    // deleteBtn.classList.add('delete');
    completeBtn.classList.add('radio');
    div.classList.add('Active');

    // append to document
    div.appendChild(taskName);
    // li.appendChild(deleteBtn);
    div.appendChild(completeBtn);
    taskList.appendChild(div);
});

//delete tasks
completedTask.addEventListener('click', (e) => {
    if(e.target.className.contains('Completed') && e.target.radio.checked == true){
        e.target.parentElement.remove();
    }

});