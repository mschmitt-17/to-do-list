import * as Inputs from './inputs.js';

function initializeSidebar() {
    const body = document.querySelector('body');
    
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    sidebar.style.gridColumn = '1/2';
    sidebar.style.backgroundColor = 'lightgrey';
    
    const sidebarHeading = document.createElement('div');
    sidebarHeading.textContent = 'Projects';
    sidebarHeading.style.fontSize = '3rem'
    sidebarHeading.style.fontWeight = 'bold';
    sidebar.appendChild(sidebarHeading);

    const sidebarBody = document.createElement('div');
    sidebarBody.classList.add('sidebar-body');
    sidebarBody.style.display = "grid";
    sidebarBody.style.paddingTop = "20px";
    sidebarBody.style.gridTemplateColumns = "1fr";
    sidebar.append(sidebarBody);

    const addProjectButton = document.createElement('button');
    addProjectButton.textContent = "+";
    addProjectButton.style.width = "100%";
    addProjectButton.style.fontSize = "2rem";
    addProjectButton.style.border = "none";
    addProjectButton.style.backgroundColor = "inherit";
    addProjectButton.addEventListener("click", () => {
        const newProjectDialog = document.querySelector(".ProjectDialog");
        newProjectDialog.showModal();
    });

    sidebar.append(addProjectButton);

    body.appendChild(sidebar);
}

function initializeContent() {
    const body = document.querySelector('body'); 

    const content = document.createElement('div');
    content.classList.add('content');
    content.style.gridColumn = '2/3';
    content.style.display = "flex";
    content.style.flexDirection = "column";
    content.style.gap = "20px";
    
    body.appendChild(content);
}

function initializeFormButtons(className) {
    const buttonContainer = document.createElement("div");
    buttonContainer.style.display = "flex";
    buttonContainer.style.gap = "10px";
    buttonContainer.style.justifyContent = "center";
    
    const submitButton = document.createElement('button')
    submitButton.classList.add('sub');
    submitButton.classList.add(className);
    submitButton.textContent = "Submit";
    buttonContainer.appendChild(submitButton);
    
    const cancelButton = document.createElement('button')
    cancelButton.classList.add('cancel');
    cancelButton.classList.add(className);
    cancelButton.textContent = "Cancel";
    buttonContainer.appendChild(cancelButton);

    return buttonContainer;
}

function createNewForm(formID) {
    const newForm = document.createElement('form');
    newForm.id = formID;
    newForm.style.display = "flex";
    newForm.style.alignItems = "center";
    newForm.style.justifyContent = "center";
    newForm.style.flexDirection = "column";
    newForm.style.gap = "10px";

    return newForm;
}

function initializeProjectDialog() {
    const body = document.querySelector("body");
    const newProjectDialog = document.createElement('dialog');
    newProjectDialog.classList.add('ProjectDialog');
    const newProjectForm = createNewForm("projectform");

    const inputContainer = document.createElement("div");
    
    const title = Inputs.TitleInput('titleProject');
    inputContainer.appendChild(title.newLabel);
    inputContainer.appendChild(title.newInput);

    newProjectForm.appendChild(inputContainer);

    const buttonContainer = initializeFormButtons("project-button");

    newProjectForm.appendChild(buttonContainer);

    newProjectDialog.appendChild(newProjectForm);

    body.appendChild(newProjectDialog);
}

function initializeTDDialog() {
    const body = document.querySelector("body");
    const newTDDialog = document.createElement('dialog');
    newTDDialog.classList.add('TDDialog');
    const newTDForm = createNewForm("tdform")

    const inputContainer = document.createElement('div');
    inputContainer.style.display = "flex";
    inputContainer.style.alignItems = "center";
    inputContainer.style.gap = "10px";

    const title = Inputs.TitleInput('title');
    inputContainer.appendChild(title.newLabel);
    inputContainer.appendChild(title.newInput);

    const description = Inputs.DescriptionInput('description');
    description.newInput.for = newTDForm.id;
    inputContainer.appendChild(description.newLabel);
    inputContainer.appendChild(description.newInput);

    const dueDate = Inputs.DueDateInput('dueDate');
    inputContainer.appendChild(dueDate.newLabel);
    inputContainer.appendChild(dueDate.newInput);

    const priority = Inputs.PriorityInput('priority');
    priority.newInput.for = newTDForm.id;
    inputContainer.appendChild(priority.newLabel);
    inputContainer.appendChild(priority.newInput);

    newTDForm.appendChild(inputContainer);

    const buttonContainer = initializeFormButtons("td-button");

    newTDForm.appendChild(buttonContainer);

    newTDDialog.appendChild(newTDForm);

    body.appendChild(newTDDialog);
}

function initializeDeleteProjectDialog() {
    const body = document.querySelector("body");
    const newDeleteDialog = document.createElement('dialog');
    newDeleteDialog.classList.add('DeleteDialog');
    const deleteForm = createNewForm("deleteform");

    const deletePrompt = document.createElement('div');
    deletePrompt.textContent = "Are you sure you would like to delete this project? Doing so will delete all elements of this project."
    deleteForm.appendChild(deletePrompt);
    
    const buttonContainer = initializeFormButtons("delete-button");
    deleteForm.appendChild(buttonContainer);

    newDeleteDialog.appendChild(deleteForm);

    body.appendChild(newDeleteDialog);
}

function initializePriorityChangeDialog() {
    const body = document.querySelector("body");
    const changePriorityDialog = document.createElement('dialog');
    changePriorityDialog.classList.add('PriorityDialog');
    const changePriorityForm = createNewForm("priorityform");

    const inputContainer = document.createElement("div");

    const priority = Inputs.PriorityInput("priorityChange");
    priority.newInput.for = changePriorityForm.id;
    inputContainer.appendChild(priority.newLabel);
    inputContainer.appendChild(priority.newInput);

    changePriorityForm.appendChild(inputContainer);
    
    const buttonContainer = initializeFormButtons("priority-button");

    changePriorityForm.appendChild(buttonContainer);

    changePriorityDialog.appendChild(changePriorityForm);

    body.appendChild(changePriorityDialog);
}

function initializeDialog() {
    initializeProjectDialog();
    initializeTDDialog();
    initializeDeleteProjectDialog();
    initializePriorityChangeDialog();
}

export { initializeSidebar, initializeContent, initializeDialog };