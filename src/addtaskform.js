class Task {
    constructor(taskname, taskdescription, duedate, priority) {
    this.taskname = taskname;
    this.taskdescription = taskdescription;
    this.duedate = duedate;
    this.priority = priority;
    this.completed = false;
    }
}

const task0 = new Task("Make Task Tracker", "Make Task Tracker website", "19/01/2025", "High")
const task1 = new Task("Finish javascript module", "Do javascript exercises", "28/01/2025", "Medium")
export const tasks = [task0, task1];

// Get values from form
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

// Create new task and push to array
function createTask(taskname, taskdescription, duedate, priority) {
    const createTask = new Task(`${taskname}, ${taskdescription}, ${duedate}, ${priority}`);
    tasks.push(createTask);
    console.log(tasks);
}