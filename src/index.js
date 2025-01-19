import "./styles.css";
import { addTask } from "./addtaskform";
import { createTasks } from "./createTasks";
import { tasks } from "./addtaskform";


// Form handling
const formDialog = document.getElementById("addbutton")
const closeForm = document.getElementById("closeformbtn")
// Open form to add a new task when add task button is pressed
formDialog.addEventListener("click", () => {
    document.getElementById("addtaskform").style.display = "flex";
});
    
closeForm.addEventListener("click", () =>  {
    document.getElementById("addtaskform").style.display = "none";
});

// When add task form confirmation button is pressed, run addTask function
const form = document.getElementById("addtaskform");
form.addEventListener('submit', addTask);
   
createTasks(tasks, "default");



