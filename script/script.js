// Selección de elementos
const taskInput = document.getElementById("text-input");
const taskContainer = document.getElementById("task-container");
const deleteBtn = document.getElementById("clear-btn");

// Función para crear un container de tarea
function createTaskContainer() {
    let task = document.createElement("div")
    task.className = "task";
    return task;
}

// Función para agregar una tarea
function addTask() {
    if (taskInput.value === '') {
        Swal.fire({
            title: "Error!",
            text: "No se permiten tareas sin contenido.",
            icon: "error",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true
        });
    } else {
        let task = createTaskContainer();

        let editIcon = document.createElement("i");
        editIcon.className = "edit-icon fa-solid fa-pen-to-square";

        let deleteIcon = document.createElement("i");
        deleteIcon.className = "delete-icon fa-solid fa-trash";
        deleteIcon.onclick = function() {
            taskContainer.removeChild(task);
            Swal.fire({
                title: "Exito!",
                text: "La tarea ha sido eliminada de la lista.",
                icon: "success",
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 2500,
                timerProgressBar: true
            });
        }

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = `task-${document.getElementsByClassName("task").length}`;

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
        }

        task.append(checkbox, label, editIcon, deleteIcon);
        taskContainer.append(task);
        taskInput.value = '';

        Swal.fire({
            title: "Exito!",
            text: "Se ha agregado una tarea a la lista.",
            icon: "success",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true
        });
    }
}

// Funcion para eliminar todas las tareas de la lista
function deleteAll() {
    let task = taskContainer.lastElementChild;
    if (task === null) {
        Swal.fire({
            title: "Error!",
            text: "No hay elementos en la lista.",
            icon: "error",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
        });
    } else {
        while(task) {
            taskContainer.removeChild(task);
            task = taskContainer.lastChild;
        }
        Swal.fire({
            title: "Exito",
            text: "Se ha eliminado todo de la lista.",
            icon: "success",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
        });
    }
}
