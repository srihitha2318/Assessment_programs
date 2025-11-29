// Selecting required elements
let colorInput = document.querySelector("#colorInput");
let textInput = document.querySelector("#textInput");
let bgBtn = document.querySelector("#bgBtn");
let textBtn = document.querySelector("#textBtn");
let outputBox = document.querySelector("#outputBox");


bgBtn.addEventListener("click", function () {
    let colorValue = colorInput.value.trim();  // Get color name

    // Create a temporary element to check valid colors
    let temp = document.createElement("div");
    temp.style.backgroundColor = colorValue;

    // If browser ignores invalid color, backgroundColor becomes empty string
    if (temp.style.backgroundColor === "") {
        alert("Invalid color name!");
    } else {
        outputBox.style.backgroundColor = colorValue;
    }
});

textBtn.addEventListener("click", function () {
    let textValue = textInput.value.trim();  // Get text input

    // If user enters empty string → show alert
    if (textValue === "") {
        alert("Please enter some text!");
    } else {
        outputBox.textContent = textValue; // Update the div text
    }
});
