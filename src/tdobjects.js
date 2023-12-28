const ToDo = (title, description, dueDate, priority) => {
    return {title, description, dueDate, priority, completed: false};
}

const Project = (title, selected, toDoList = []) => {
    const addToDo = (td) => {
        toDoList.push(td);
    };
    const removeToDo = (index) => {
        toDoList.splice(index, 1);
    };
    return {title, toDoList, addToDo, removeToDo, selected};
}

export { ToDo, Project };