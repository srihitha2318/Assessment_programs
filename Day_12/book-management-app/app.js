const BASE_URL = "https://book-management-applicat-f3ee0-default-rtdb.asia-southeast1.firebasedatabase.app/books";

// ------------------------------
// CREATE BOOK
// ------------------------------
async function createBook() {
    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const price = document.getElementById("price").value.trim();
    const image = document.getElementById("image").value.trim();

    if (!title || !author || !price) {
        alert("Please fill all fields");
        return;
    }

    const data = { title, author, price, image };

    await fetch(`${BASE_URL}.json`, {
        method: "POST",
        body: JSON.stringify(data)
    });

    alert("Book Added Successfully!");

    document.getElementById("bookForm").reset();
    getBooks();
}



// ------------------------------
// FETCH BOOKS
// ------------------------------
async function getBooks() {
    const response = await fetch(`${BASE_URL}.json`);
    const data = await response.json();

    if (!data) {
        document.getElementById("booksContainer").innerHTML = "";
        document.getElementById("noBooks").style.display = "block";
        return;
    }

    let booksArray = [];

    for (let key in data) {
        booksArray.push({ id: key, ...data[key] });
    }

    renderBooks(booksArray);
}



// ------------------------------
// RENDER BOOK CARDS (3 per row)
// ------------------------------
function renderBooks(books) {
    const mainDiv = document.getElementById("booksContainer");
    mainDiv.innerHTML = "";

    books.forEach(book => {
        let card = document.createElement("div");
        card.className = "card";

        let img = document.createElement("img");
        img.src = book.image || "https://via.placeholder.com/150";

        let title = document.createElement("h3");
        title.textContent = book.title;

        let author = document.createElement("p");
        author.textContent = `Author: ${book.author}`;

        let price = document.createElement("p");
        price.textContent = `Price: ₹${book.price}`;

        // Buttons
        let btnDiv = document.createElement("div");
        btnDiv.className = "card-buttons";

        let updateBtn = document.createElement("button");
        updateBtn.textContent = "Update Author";
        updateBtn.className = "btn-update";
        updateBtn.onclick = () => {
            let newAuthor = prompt("Enter new author:", book.author);
            if (newAuthor) updateBook(book.id, newAuthor);
        };

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "btn-delete";
        deleteBtn.onclick = () => deleteBook(book.id);

        btnDiv.append(updateBtn, deleteBtn);

        card.append(img, title, author, price, btnDiv);
        mainDiv.appendChild(card);
    });
}



// ------------------------------
// DELETE BOOK
// ------------------------------
async function deleteBook(id) {
    await fetch(`${BASE_URL}/${id}.json`, { method: "DELETE" });

    getBooks(); // refresh
}



// ------------------------------
// UPDATE AUTHOR
// ------------------------------
async function updateBook(id, newAuthor) {
    await fetch(`${BASE_URL}/${id}.json`, {
        method: "PATCH",
        body: JSON.stringify({ author: newAuthor })
    });

    getBooks(); // refresh
}



// Load books on page start
getBooks();
