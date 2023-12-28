import './style.css';
import * as DOMManipulation from "./dommanipulation.js";
import * as DOMInit from "./dominitialization.js";
import * as TDObjects from "./tdobjects.js";

function initializeDOMElements() {
    DOMInit.initializeDialog();
    DOMManipulation.setProjectFormButtonEvents();
    DOMInit.initializeSidebar();
    DOMInit.initializeContent();

    const reloadedProjects = localStorage.getItem("projects");
    if (!reloadedProjects) {
        const defaultProject = TDObjects.Project('Default', true);
        DOMManipulation.addProject(defaultProject);
        DOMManipulation.refreshSidebar();
        DOMManipulation.setTDFormButtonEvents(defaultProject);
        DOMManipulation.writeProjectToDOM(defaultProject);
    } else {
        DOMManipulation.reloadProjects(reloadedProjects);
    }
}

window.addEventListener("DOMContentLoaded", initializeDOMElements);

window.addEventListener("beforeunload", () => {
    localStorage.setItem("projects", JSON.stringify(DOMManipulation.projects));
});