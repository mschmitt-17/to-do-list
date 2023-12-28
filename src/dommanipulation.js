const projects = [];
import * as TDObjects from "./tdobjects.js";
import * as Inputs from "./inputs.js";

function reloadProjects(projectsReloaded) {
    for (let project of JSON.parse(projectsReloaded)) {
        addProject(TDObjects.Project(project.title, project.selected, project.toDoList));
    }
    for (let project of projects) {
        if (project.selected) {
            refreshSidebar();
            setTDFormButtonEvents(project);
            writeProjectToDOM(project);
        }
    }
}

function addProject(project) {
    projects.push(project);
}

function removeProject(index) {
    projects.splice(index, 1);
}

function makeNewTDCard(td, project, index) {
    
    const newTDCard = document.createElement('div');
    newTDCard.style.gridColumn = '1/2';
    newTDCard.style.display = "grid";
    newTDCard.style.alignItems = "center";
    newTDCard.style.gridTemplateColumns = "auto min-content auto min-content";
    newTDCard.style.gap = "10px";
    newTDCard.style.textAlign = "center";
    newTDCard.style.borderRadius = "12px";
    newTDCard.style.padding = "10px";
    newTDCard.style.position = "relative";

    const testButton = document.createElement('div');
    testButton.style.width = "1%";
    testButton.style.height = "100%";
    testButton.style.position = "absolute";
    testButton.style.backgroundColor = "inherit";
    newTDCard.appendChild(testButton);

    const priorityDialog = document.querySelector(".PriorityDialog");

    testButton.addEventListener("click", () => {
        setPriorityFormButtonEvents(project, index);
        priorityDialog.showModal();
    });

    const cardTitle = document.createElement('div');
    cardTitle.style.gridColumn = "1/2";
    cardTitle.textContent = `Title: ${td.title}`;
    newTDCard.appendChild(cardTitle);

    const cardDescription = document.createElement('button');
    cardDescription.style.gridColumn = "2/3";
    cardDescription.style.backgroundColor = "inherit";
    cardDescription.style.border = "none";
    cardDescription.textContent = `Description`;
    newTDCard.appendChild(cardDescription);

    const expandedDescription = document.createElement('div');
    expandedDescription.textContent = `${td.description}`;
    expandedDescription.style.gridColumn = "1/5";
    expandedDescription.style.display = "none";

    cardDescription.addEventListener("click", () => {
        if (expandedDescription.style.display === "none") {
            expandedDescription.style.display = "";
        } else {
            expandedDescription.style.display = "none";
        }
    })

    const cardDueDate = document.createElement('div');
    cardDueDate.style.gridColumn = "3/4";
    cardDueDate.textContent = `Due Date: ${td.dueDate}`;
    newTDCard.appendChild(cardDueDate);

    if (td.priority == "high") {
        newTDCard.style.backgroundImage = "linear-gradient(to right, red 1%, lightgrey 1%)";
    } else if (td.priority == "medium") {
        newTDCard.style.backgroundImage = "linear-gradient(to right, goldenrod 1%, lightgrey 1%)";
    } else if (td.priority == "low") {
        newTDCard.style.backgroundImage = "linear-gradient(to right, green 1%, lightgrey 1%)";
    }

    const check = document.createElement("input");
    check.type = "checkbox";
    check.id = "resolve";
    check.style.gridColumn = "4/5";

    let timeoutCheck;

    check.addEventListener("click", () => {
        if (check.checked) {
            timeoutCheck = setTimeout(() => {
                project.removeToDo(index);
                writeProjectToDOM(project);
            }, 3000);
        } else {
            clearTimeout(timeoutCheck)
        };
    });

    newTDCard.appendChild(check);

    newTDCard.appendChild(expandedDescription);

    return newTDCard;
}

function writeProjectToDOM(project) {
    const container = document.querySelector('.content');

    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }

    const title = document.createElement('div');
    title.textContent = project.title;
    title.style.fontSize = "2rem";
    title.style.fontWeight = "bold";
    title.style.padding = "10px";
    container.appendChild(title);

    const TDContainer = document.createElement('div');
    TDContainer.style.width = "100%";
    TDContainer.style.boxSizing = "border-box";
    TDContainer.style.display = "grid";
    TDContainer.style.gridTemplateColumns = "1fr";
    TDContainer.style.padding = "10px";
    TDContainer.style.gap = "5px";

    for (let i = 0; i < project.toDoList.length; i++) {
        const td = project.toDoList[i];
        const newTDCard = makeNewTDCard(td, project, i);
        TDContainer.appendChild(newTDCard);
    }

    container.appendChild(TDContainer);

    const addButton = document.createElement('button');
    addButton.style.width = '60px'
    addButton.style.height = '60px'
    addButton.textContent = '+';
    addButton.style.fontSize = '48px';
    addButton.style.borderRadius = '50%';
    addButton.style.border = "none";
    addButton.style.backgroundColor = "inherit";
    addButton.style.marginLeft = "10px";
    addButton.addEventListener('click', () => {
        const newTDDialog = document.querySelector(".TDDialog");
        newTDDialog.showModal();
    });

    container.appendChild(addButton);
}

function setProjectFormButtonEvents() {
    const newProjectDialog = document.querySelector(".ProjectDialog");
    const newProjectForm = document.querySelector("#projectform");

    const projectButtons = document.querySelectorAll(".project-button");

    projectButtons.forEach((button) => {
        if (button.classList.contains("sub")) {
            button.addEventListener("click", (event) => {
                const projectTitle = document.querySelector("#titleProject");
                if (projectTitle.validity.valueMissing) {
                    projectTitle.setCustomValidity("Must enter a title");
                    projectTitle.reportValidity();
                } else {
                    const formValues = new FormData(newProjectForm);
                    addProject(TDObjects.Project(formValues.get("titleProject")));
                    Inputs.resetForm(newProjectForm);
                    refreshSidebar();
                    newProjectDialog.close();
                    event.preventDefault();
                }
            });
        } else if (button.classList.contains("cancel")) {
            button.addEventListener("click", (event) => {
                Inputs.resetForm(newProjectForm);
                newProjectDialog.close();
                event.preventDefault();
            });
        }
    });
}

function setTDFormButtonEvents(project) {
    const newTDDialog = document.querySelector(".TDDialog");
    const newTDForm = document.querySelector('#tdform');
    const TDButtons = document.querySelectorAll(".td-button");

    TDButtons.forEach((button) => {
        if (button.classList.contains("sub")) {
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
            newButton.addEventListener("click", (event) => { 
                const titleInput = document.querySelector("#title");
                const dateInput = document.querySelector("#dueDate");
                const priorityInput = document.querySelector("#priority");
                if (titleInput.validity.valueMissing) {
                    titleInput.setCustomValidity("Must enter a title");
                    titleInput.reportValidity();
                } else if (dateInput.validity.valueMissing) {
                    titleInput.setCustomValidity("");
                    dateInput.setCustomValidity("Must input a date");
                    dateInput.reportValidity();
                } else if (priorityInput.value === "--Please choose an option--" || priorityInput.value === "") {
                    titleInput.setCustomValidity("");
                    dateInput.setCustomValidity("");
                    priorityInput.setCustomValidity("Must choose a priority level");
                    priorityInput.reportValidity();
                } else {
                    event.preventDefault();
                    const formValues = new FormData(newTDForm);
                    project.addToDo(TDObjects.ToDo(formValues.get('title'),
                                    formValues.get('description'),
                                    formValues.get('dueDate'),
                                    formValues.get("priority")));
                    Inputs.resetForm(newTDForm);
                    writeProjectToDOM(project);
                    newTDDialog.close();
                    event.preventDefault();
                }
            });
        } else if (button.classList.contains("cancel")) {
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
            newButton.addEventListener("click", (event) => {
                Inputs.resetForm(newTDForm);
                newTDDialog.close();
                event.preventDefault();
            });
        }
    });
}

function setDeleteFormButtonEvents(index) {
    const deleteDialog = document.querySelector(".DeleteDialog");
    const deleteButtons = document.querySelectorAll(".delete-button");

    deleteButtons.forEach((button) => {
        if (button.classList.contains("sub")) {
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
            newButton.addEventListener("click", (event) => {
                if (projects[index].selected) {
                    projects[0].selected = true;
                }
                removeProject(index);
                deleteDialog.close();
                refreshSidebar();
                writeProjectToDOM(projects[0]);
                event.preventDefault();
            });
        } else if (button.classList.contains("cancel")) {
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
            newButton.addEventListener("click", (event) => {
                deleteDialog.close();
                event.preventDefault();
            });
        }
    });
}

function setPriorityFormButtonEvents(project, index) {
    const priorityDialog = document.querySelector(".PriorityDialog");
    const priorityForm = document.querySelector("#priorityform");
    const priorityButtons = document.querySelectorAll(".priority-button");

    priorityButtons.forEach((button) => {
        if (button.classList.contains("sub")) {
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
            newButton.addEventListener("click", (event) => {
                const priorityChange = document.querySelector("#priorityChange");
                if (priorityChange.value === "--Please choose an option--" || priorityChange.value === "") {
                    priorityChange.setCustomValidity("Must choose a priority level");
                    priorityChange.reportValidity();
                } else {
                    const formValues = new FormData(priorityForm);
                    project.toDoList[index].priority = formValues.get("priorityChange");
                    Inputs.resetForm(priorityForm);
                    priorityDialog.close();
                    writeProjectToDOM(project);
                    event.preventDefault();
                }
            });
        } else if (button.classList.contains("cancel")) {
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
            newButton.addEventListener("click", (event) => {
                Inputs.resetForm(priorityForm);
                priorityDialog.close();
                event.preventDefault();
            });
        }
    });
} 

function resetButtonColors() {
    for (let i = 0; i < projects.length; i++) {
        projects[i].selected = false;
    }
}

function refreshSidebar() {
    const sidebarBody = document.querySelector('.sidebar-body');
    
    while (sidebarBody.hasChildNodes()) {
        sidebarBody.removeChild(sidebarBody.firstChild);
    }

    for (let i = 0; i < projects.length; i++) {
        const newProject = document.createElement('div');
        newProject.style.display = "flex";
        const deleteProject = document.createElement('button');
        deleteProject.style.backgroundColor = "inherit";
        const selectProject = document.createElement('button');
        selectProject.style.backgroundColor = "inherit";
        selectProject.style.flex = "1 1 auto";

        deleteProject.textContent = "X";
        deleteProject.style.border = "none";
        deleteProject.style.fontSize = "1.5rem";
        selectProject.textContent = projects[i].title;
        selectProject.style.border = "none";
        selectProject.style.fontSize = "1.5rem";
        
        if (projects[i].selected) {
            newProject.style.backgroundColor = "slategrey";
        } else {
            newProject.style.backgroundColor = "inherit";
        }

        const deleteDialog = document.querySelector(".DeleteDialog");
        deleteProject.addEventListener("click", () => {
            setDeleteFormButtonEvents(i);
            deleteDialog.showModal();
        });
        if (i > 0) {
            newProject.appendChild(deleteProject);
        }

        selectProject.addEventListener("click", () => {
            resetButtonColors();
            projects[i].selected = true;
            refreshSidebar();
            writeProjectToDOM(projects[i]);
            setTDFormButtonEvents(projects[i]);
        });
        newProject.appendChild(selectProject);

        sidebarBody.appendChild(newProject); 
    }
}

export { reloadProjects, addProject, writeProjectToDOM, setProjectFormButtonEvents, setTDFormButtonEvents, refreshSidebar, projects };