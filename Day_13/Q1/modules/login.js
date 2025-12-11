export function handleLogin() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user = JSON.parse(localStorage.getItem("user"));

    if (!user || user.email !== email || user.password !== password) {
        alert("Invalid email or password");
        return;
    }

    localStorage.setItem("isLogged", true);

    alert("Login successful!");
    window.location.href = "todos.html";
}