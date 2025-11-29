
let heading = document.getElementById("main-heading");
heading.textContent = "Welcome to the DOM World!";


let paragraphs = document.getElementsByTagName("p");
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "blue";
}

let box = document.querySelector(".container");
box.style.backgroundColor = "yellow";
