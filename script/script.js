// Selección de elementos
const taskInput = document.getElementById("text-input");
const taskContainer = document.getElementById("task-container");
window.onload = loadData();

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

        // Función para tachar tareas
        checkbox.onclick = function(){
            if (checkbox.checked) {
                label.style.textDecoration = "line-through";
            } else {
                label.style.textDecoration = "none";
            }
            saveData();
        }

        task.append(checkbox, label, editIcon, deleteIcon);
        taskContainer.append(task);
        taskInput.value = '';
    }
    saveData();
}

// Función para eliminar una tarea


// Función para eliminar toda la lista de tareas


// Función para almacenar tareas en memoria
function saveData() {
    localStorage.setItem("data", taskContainer.innerHTML);
}

// Funcion para cargar tareas encontradas en memoria
function loadData() {
    taskContainer.innerHTML = localStorage.getItem("data");
}