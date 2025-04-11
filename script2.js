const form = document.getElementById("todo-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;
    li.appendChild(span);

    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("task-buttons");

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✓";
    completeBtn.classList.add("complete-btn");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.classList.add("delete-btn");

    buttonsDiv.appendChild(completeBtn);
    buttonsDiv.appendChild(deleteBtn);
    li.appendChild(buttonsDiv);

    taskList.appendChild(li);

    taskInput.value = "";

    completeBtn.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });
});
