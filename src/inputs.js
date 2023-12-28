const Input = (inputID, elementType) => {

    const newLabel = document.createElement('label');
    newLabel.for = inputID;

    const newInput = document.createElement(elementType);
    newInput.id = inputID;
    newInput.name = inputID;

    return { newLabel, newInput };
}

const TitleInput = (inputID) => {
    const inputPair = Input(inputID, 'input');

    inputPair.newLabel.textContent = 'Title: ';
    inputPair.newInput.type = 'text';
    inputPair.newInput.required = 'true';
    inputPair.newInput.maxLength = '20';

    return inputPair;    
}

const DescriptionInput = (inputID) => {
    const inputPair = Input(inputID, 'textarea');

    inputPair.newLabel.textContent = 'Description: ';
    
    return inputPair;
}

const DueDateInput = (inputID) => {
    const inputPair = Input(inputID, 'input');
    
    inputPair.newLabel.textContent = 'Due Date: ';
    inputPair.newInput.type = 'date';
    inputPair.newInput.required = 'true';

    return inputPair;
}

const PriorityInput = (inputID) => {
    const inputPair = Input(inputID, 'select');

    inputPair.newLabel.textContent = 'Priority: ';
    
    const defaultOption = document.createElement('option');
    defaultOption.value = "";
    defaultOption.textContent = "--Please choose an option--";
    inputPair.newInput.appendChild(defaultOption);
    
    const high = document.createElement('option');
    high.value = "high";
    high.textContent = "High";
    inputPair.newInput.appendChild(high);

    const medium = document.createElement('option');
    medium.value = "medium";
    medium.textContent = "Medium";
    inputPair.newInput.appendChild(medium);

    const low = document.createElement('option');
    low.value = "low";
    low.textContent = "Low";
    inputPair.newInput.appendChild(low);

    return inputPair;
}

function resetForm(form) {
    const formElements = Array.from(form.elements);
    for (let element of formElements) {
        element.value ="";
    }
}

export { TitleInput, DescriptionInput, DueDateInput, PriorityInput, resetForm };