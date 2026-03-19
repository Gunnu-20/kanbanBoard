let tasksData = {}

const todo = document.getElementById("todo");
const progress = document.getElementById("progress");
const done = document.getElementById("done");
const columns = [todo, progress, done];
let draggedElement = null;

function addTask(title, desc, column) {
    const div = document.createElement("div")

    div.classList.add('task')
    div.setAttribute("draggable", "true")
    div.innerHTML = `
        <h2>${title}</h2>
        <p>${desc}</p>
        <button>Delete</button>
    `
    column.appendChild(div)

    div.addEventListener("drag", (e) => {
        draggedElement = div;
    })

    // delete button
    const DeleteBtn = div.querySelector("button");
    DeleteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        div.remove();
        updateTaskCoun();
    })
    return div;
}

function updateTaskCoun() {
    columns.forEach(col => {
        const tasks = col.querySelectorAll(".task");
        const count = col.querySelector(".right");

        count.innerText = tasks.length;

        tasksData[col.id] = Array.from(tasks).map(t => {
            return {
                title: t.querySelector("h2").innerText,
                desc: t.querySelector("p").innerText
            }
        })
    })

    localStorage.setItem("tasks", JSON.stringify(tasksData));
}

if (localStorage.getItem("tasks")) {
    const data = JSON.parse(localStorage.getItem("tasks"));

    for (const col in data) {
        const column = document.querySelector(`#${col}`);
        data[col].forEach(task => {
            addTask(task.title, task.desc, column);
        })
    }

    updateTaskCoun();
}

// Add drag events to existing tasks
const tasks = document.querySelectorAll(".task");

tasks.forEach(task => {
    task.addEventListener("dragstart", (e) => {
        draggedElement = task;
    })
})

function addDragEventsOnColumn(column) {
    column.addEventListener("dragenter", (e) => {
        e.preventDefault();
        column.classList.add("drag-over");
    })
    column.addEventListener("dragleave", (e) => {
        e.preventDefault();
        column.classList.remove("drag-over");
    })
    column.addEventListener("dragover", (e) => {
        e.preventDefault();
    })

    column.addEventListener("drop", (e) => {
        e.preventDefault();

        column.appendChild(draggedElement);
        column.classList.remove("drag-over");

        updateTaskCoun();
    })
}

addDragEventsOnColumn(todo);
addDragEventsOnColumn(progress);
addDragEventsOnColumn(done);

// Modal related code
const toggleModalBtn = document.getElementById("toggle-modal");
const modalBg = document.querySelector(".modal .bg");
const modal = document.querySelector(".modal");
const addTaskBtn = document.querySelector("#add-new-task");

toggleModalBtn.addEventListener("click", () => {
    modal.classList.toggle("active");
})

modalBg.addEventListener("click", () => {
    modal.classList.remove("active");
})

addTaskBtn.addEventListener("click", () => {
    const taskTitle = document.getElementById("task-title-input").value;
    const taskDesc = document.getElementById("task-description-input").value;

    addTask(taskTitle, taskDesc, todo);
    updateTaskCoun();
    modal.classList.remove("active");

    document.getElementById("task-title-input").value = "";
    document.getElementById("task-description-input").value = "";
})