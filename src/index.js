import "./styles.css";
import { addTask } from "./addTasks";
import { renderTasks } from "./renderTasks";
import { addProject } from "./addProject";
import { renderProjects } from "./addProject";

// Get the users current page
export function getCurrentPage() {
    return sessionStorage.getItem("currentPage") || "Home";
}

// Get tasks based on which page the user is currently on
export function getTasks() {
    return JSON.parse(localStorage.getItem("Tasks")) || [];
}

export function getProjects() {
    return JSON.parse(localStorage.getItem("Projects")) || [];
}
// Sets the user's current page to desired page
export function navigateTo(page) {
    sessionStorage.setItem("currentPage", page);
}

// Global variable for current tasks
export const tasks = getTasks();
export const projects = getProjects();

navigateTo("Home");

// Debug
console.log("SessionStorage Current Page:", sessionStorage.getItem("currentPage"));
console.log("Current Page (state.js):", getCurrentPage());
console.log(tasks);

// Form handling
const taskDialog = document.getElementById("addtaskbutton")
const closetaskForm = document.getElementById("closetaskformbtn")

const closeprojectForm = document.getElementById("closeprojectformbtn")
const projectDialog = document.getElementById("addprojectbutton")
//const projectBtn = document.getElementById("project")

// Task form
taskDialog.addEventListener("click", () => {
    document.getElementById("addtaskform").style.display = "flex";
});
    
closetaskForm.addEventListener("click", () =>  {
    document.getElementById("addtaskform").style.display = "none";
});

// Project form
projectDialog.addEventListener("click", () => {
    document.getElementById("addprojectform").style.display = "flex";
});
    
closeprojectForm.addEventListener("click", () =>  {
    document.getElementById("addprojectform").style.display = "none";
});

// When the project button is pressed, it navigates to that page and renders the tasks for that project
//projectBtn.addEventListener("click", () => {
  //  navigateTo("Home");
   // renderTasks(tasks, false);
//});
    
// When add task form confirmation button is pressed, run addTask function
const taskForm = document.getElementById("addtaskform");
taskForm.addEventListener('submit', addTask);

const projectForm = document.getElementById("addprojectform");
projectForm.addEventListener('submit', addProject);

renderTasks(tasks, true);
renderProjects(projects);


