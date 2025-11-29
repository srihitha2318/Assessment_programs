
let list = document.querySelector("#myList");

let btn = document.querySelector("#addBtn");


btn.addEventListener("click", function () {

    let newLi = document.createElement("li");

    let count = list.children.length + 1;

    newLi.textContent = "New Item " + count;

    if (count % 2 !== 0) {
    
        newLi.style.color = "blue";
        newLi.style.fontWeight = "bold";
    } else {

        newLi.style.color = "red";
        newLi.style.fontStyle = "italic";
    }

    list.appendChild(newLi);
});
