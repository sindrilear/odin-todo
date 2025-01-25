import { projects, navigateTo, tasks, addToLocalStorage, deleteElement } from ".";
import { renderTasks } from "./renderTasks";

class Project {
    constructor (projectName ) {
        this.projectName = projectName;
    }
}

export function addProject(event) {
    event.preventDefault();
    let projectName = document.getElementById("projectname").value;
    createProject(projectName);
    renderProjects(projects);

    document.getElementById("addprojectform").style.display = "none";
    const form = event.target;
    form.reset();
}

function createProject(projectname) {
    const createProject = new Project (`${projectname}`)
    projects.push(createProject);
    addToLocalStorage(projects, "project");
    console.log(projects);
}

export function renderProjects(projectArray) {
    const projectsheader = document.querySelector("#projects")
    projectsheader.innerHTML = "";

    for (let i = 0; i < projectArray.length; i++) {
        const projectwrapper = document.createElement("div")
        projectwrapper.setAttribute("class", "projectwrapper")
        projectsheader.appendChild(projectwrapper)

        const projectbutton = document.createElement("button")
        projectbutton.setAttribute("class", "projectbutton")
        projectbutton.setAttribute("id", `project${i}`)
        projectbutton.innerHTML = projectArray[i].projectName;
        projectwrapper.appendChild(projectbutton)

        const projectdelete = document.createElement("button")
        projectdelete.setAttribute("class", "deletebutton")
        projectdelete.innerHTML = "X"
        projectwrapper.appendChild(projectdelete)

        projectdelete.addEventListener("click", (event) => {
            deleteElement (projects, i, "Project")
            renderProjects(projects);
        })
        projectbutton.addEventListener("click", (event) => {
            const buttonId = event.target.id;
            navigateTo(buttonId);
            renderTasks(tasks, false);
        });
    }
}