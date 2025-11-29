
let taskInput = document.querySelector("#taskInput");
let addTaskBtn = document.querySelector("#addTaskBtn");
let taskList = document.querySelector("#taskList");

addTaskBtn.addEventListener("click", function () {

    let taskText = taskInput.value.trim(); 
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskText;

    // Create Complete button
    let completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";

    // Add complete functionality
    completeBtn.addEventListener("click", function () {
        li.classList.toggle("completed"); // Adds/removes completed class
    });

    // Create Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    // Add delete functionality
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    // Append buttons to <li>
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    // Add <li> to the list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
});
