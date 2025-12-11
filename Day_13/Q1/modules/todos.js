import { displayTodos } from "./displayTodos.js";

export async function loadTodos() {
    if (!localStorage.getItem("isLogged")) {
        alert("Please login first!");
        window.location.href = "login.html";
        return;
    }

    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/todos");
        let data = await res.json();
        displayTodos(data.slice(0, 20));
    } catch (error) {
        console.log("Error:", error);
    }
}