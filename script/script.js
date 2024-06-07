// Selección de elementos
const taskInput = document.getElementById("text-input");
const taskContainer = document.getElementById("task-container");

// Función para crear un container de tarea
function createTaskContainer() {
    let task = document.createElement("div")
    task.className = "task";
    return task;
}

// Función para agregar una tarea
function addTask() {
    if (taskInput.value === '') {
        alert("Can't add empty tasks!");
    } else {
        let task = createTaskContainer();

        let editIcon = document.createElement("i");
        editIcon.className = "edit-icon fa-solid fa-pen-to-square";
        let deleteIcon = document.createElement("i");
        deleteIcon.className = "delete-icon fa-solid fa-trash";

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = `task-${document.getElementsByClassName("task").length}`;
        // checkbox.onclick = () => checkLabel(checkbox);

        let label = document.createElement("label");
        label.innerHTML = taskInput.value;
        label.setAttribute("for", checkbox.className);

        checkbox.onclick = function(){
            if (checkbox.checked) {
                label.style.textDecoration = "line-through";
            } else {
                label.style.textDecoration = "none";
            }
        }

        task.append(checkbox, label, editIcon, deleteIcon);
        taskContainer.append(task);
        taskInput.value = '';
    }
}
