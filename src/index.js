import "./styles.css";

class Task {
    constructor(taskname, taskdescription, duedate, priority) {
    this.taskname = taskname;
    this.taskdescription = taskdescription;
    this.duedate = duedate;
    this.priority = priority;
    this.completed = false;
    }
}

const project0 = new Task("Make Task Tracker", "Make Task Tracker website", "19/01/2025", "High")
const project1 = new Task("Finish javascript module", "Do javascript exercises", "28/01/2025", "Medium")
const projects = [project0, project1];

function createTasks(taskArray, project) {
    for (let i = 0; i < taskArray.length; i++) {
        // Create a task and assign it an id
        const taskwrapper = document.querySelector("#taskwrapper")
        const taskdiv = document.createElement("div")
        taskdiv.setAttribute("class", "task")
        taskdiv.setAttribute("name", `${project}`)
        taskdiv.setAttribute("id", `${i}`)
        taskwrapper.appendChild(taskdiv);

        // Create div for task name and delete button
        const tasknamewrapper = document.createElement("div")
        tasknamewrapper.setAttribute("class", "tasknamewrapper")
        taskdiv.appendChild(tasknamewrapper)
        const taskname = document.createElement("h3")
        taskname.setAttribute("class", "taskname")
        taskname.innerHTML = `${taskArray[i].taskname}`
        tasknamewrapper.appendChild(taskname)
        const deletebutton = document.createElement("button")
        deletebutton.setAttribute("class", "deletebutton");
        deletebutton.innerHTML = "X"
        tasknamewrapper.appendChild(deletebutton);

        // Add Description, Due date, Priority
        const taskdescription = document.createElement("p")
        taskdescription.setAttribute("class", "taskdescription")
        taskdescription.innerHTML = `Description: ${taskArray[i].taskdescription}`
        const duedate = document.createElement("p")
        duedate.setAttribute ("class", "duedate")
        duedate.innerHTML = `Due by: ${taskArray[i].duedate}`
        const priority = document.createElement("p")
        priority.setAttribute("class", "priority")
        priority.innerHTML = `Priority: ${taskArray[i].priority}`
        taskdiv.appendChild(taskdescription)
        taskdiv.appendChild(duedate)
        taskdiv.appendChild(priority)

        // Add checkbox and delete button
        const checkboxdiv = document.createElement("div")
        taskdiv.appendChild(checkboxdiv)
        const checkbox = document.createElement("input")
        checkbox.setAttribute("type", "checkbox")
        checkbox.setAttribute("name", `complete${i}`)
        checkbox.setAttribute("id", `${i}`)
        const checkboxlabel = document.createElement("label")
        checkboxlabel.setAttribute("for", `complete${i}`)
        checkboxlabel.innerHTML = "This task has been completed"
        checkboxdiv.appendChild(checkbox)
        checkboxdiv.appendChild(checkboxlabel)
        const editbutton = document.createElement("button")
        editbutton.setAttribute("type", "button")
        editbutton.setAttribute("class", "addbutton")
        editbutton.innerHTML = "Edit"
        taskdiv.appendChild(editbutton)
    }
}
    
createTasks(projects, "default");