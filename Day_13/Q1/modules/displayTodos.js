export function displayTodos(data) {
    let container = document.getElementById("todos");
    container.innerHTML = "";

    data.forEach(todo => {
        let div = document.createElement("div");
        div.style.border = "1px solid #aaa";
        div.style.margin = "10px";
        div.style.padding = "10px";

        div.innerHTML = `
            <h3>Todo ID: ${todo.id}</h3>
            <p>${todo.title}</p>
            <p>Status: ${todo.completed ? "✔ Completed" : "❌ Not Completed"}</p>
        `;

        container.appendChild(div);
    });
}