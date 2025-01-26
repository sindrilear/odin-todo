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
    let taskEdit = document.getElementById("taskEdit").value;
    let taskName = document.getElementById("taskname").value;
    let taskDescription = document.getElementById("taskdescription").value;
    let taskdueDate = document.getElementById("duedate").value;
    let priority = document.querySelector('input[name="priority"]:checked')?.value;
    if (taskEdit != "") {
        document.getElementById("taskEdit").value = "";
        editTask(taskName, taskDescription, taskdueDate, priority, taskEdit)
    } else {
    createTask(taskName, taskDescription,taskdueDate, priority);
    }
    document.getElementById("addtaskform").style.display = "none";
    const form = event.target;
    form.reset();
}

function editTask(taskname, taskdescription, duedate, priority, taskIndex) {
    let task = tasks[taskIndex]
    task.taskname = taskname;
    task.taskdescription = taskdescription;
    task.duedate = duedate;
    task.priority = priority;
    let currentPage = getCurrentPage();
    addToLocalStorage(tasks, "task");
    if (currentPage === "Home") {
        renderTasks(tasks, true)
    } else {
    renderTasks(tasks);
    }
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
