import { renderTasks } from "./renderTasks";
import {  getCurrentPage, tasks, addToLocalStorage } from "."

class Task {
    constructor(taskname, taskdescription, duedate, priority) {
    this.taskname = taskname;
    this.taskdescription = taskdescription;
    this.duedate = duedate;
    this.priority = priority;
    this.completed = false;
    this.page = "";
    }
}

// Get values that user types into form
export function addTask(event) {
    event.preventDefault();
    let taskName = document.getElementById("taskname").value;
    let taskDescription = document.getElementById("taskdescription").value;
    let taskdueDate = document.getElementById("duedate").value;
    let priority = document.querySelector('input[name="priority"]:checked')?.value;
    document.getElementById("addtaskform").style.display = "none";
    createTask(taskName, taskDescription,taskdueDate, priority);

    const form = event.target;
    form.reset();
}

// Render the new task, based on which project is open
function createTask(taskname, taskdescription, duedate, priority) {
    const createTask = new Task(`${taskname}`, `${taskdescription}`, `${duedate}`, `${priority}`);
    let currentPage = getCurrentPage();
    createTask.page = currentPage;
    tasks.push(createTask);

    addToLocalStorage(tasks, "task");
    if (currentPage === "Home") {
        renderTasks(tasks, true)
    } else {
    renderTasks(tasks);
    }
}
