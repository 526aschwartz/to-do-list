//list an array to start task
let tasks = []

//add event listener to the add tasks 
document.getElementById('addTaskBtn').addEventListener('click', function() {
    //saving text value from input box as variable 
    let taskInput = document.getElementById('taskInput').value

    if(taskInput){
//pushes item to end of list
    tasks.push(taskInput)
//clears the task bar 
    document.getElementById('taskInput').value = ''
    //display task
    displayTasks()
    }

})