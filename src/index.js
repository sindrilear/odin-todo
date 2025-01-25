import "./styles.css";
import { addTask } from "./addTasks";
import { renderTasks } from "./renderTasks";

// Get the users current page
export function getCurrentPage() {
    return sessionStorage.getItem("currentPage") || "Home";
}

// Get tasks based on which page the user is currently on
export function getTasks() {
    const currentPage = getCurrentPage();
    return JSON.parse(localStorage.getItem("Tasks")) || [];
}

// Sets the user's current page to desired page
export function navigateTo(page) {
    sessionStorage.setItem("currentPage", page);
}

// Global variable for current tasks
export const tasks = getTasks();

navigateTo("Home");

// Debug
console.log("SessionStorage Current Page:", sessionStorage.getItem("currentPage"));
console.log("Current Page (state.js):", getCurrentPage());
console.log(tasks);

// Form handling
const formDialog = document.getElementById("addbutton")
const closeForm = document.getElementById("closeformbtn")
const projectBtn = document.getElementById("project0")

// Open form to add a new task when add task button is pressed
formDialog.addEventListener("click", () => {
    document.getElementById("addtaskform").style.display = "flex";
});
    
closeForm.addEventListener("click", () =>  {
    document.getElementById("addtaskform").style.display = "none";
});

projectBtn.addEventListener("click", () => {
    navigateTo("project0");
    renderTasks(tasks, false);
});
    
// When add task form confirmation button is pressed, run addTask function
const form = document.getElementById("addtaskform");
form.addEventListener('submit', addTask);

renderTasks(tasks, true);



