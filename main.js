async function fetchBooks() {
    try {
        const res = await fetch('https://trello.vimlc.uz/books');
        const books = await res.json();

        const bookListContainer = document.querySelector('.list-books');
        bookListContainer.innerHTML = ''; 

        const searchQuery = document.getElementById('search').value.toLowerCase();

        const filteredBooks = books.filter(book => 
            book.title.toLowerCase().includes(searchQuery) || 
            book.author.toLowerCase().includes(searchQuery)
        );

        filteredBooks.forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.classList.add('book-items');
            bookCard.innerHTML = `
                <h3>Kitob nomi: <p>${book.title}</p></h3>
                <h3>Muallifi: <p>${book.author}</p></h3>
                <h3>Chiqarilgan yili: <p>${book.year}</p></h3>
                <button class="och-btn1" data-id="${book.id}">O'chrish</button>
                <button class="edit-btn1" data-id="${book.id}">Tahrirlash</button>
            `;
            bookListContainer.appendChild(bookCard);
        });

        const deleteButtons = document.querySelectorAll('.och-btn1');
        deleteButtons.forEach(button => {
            button.addEventListener('click', () => deleteBook(button));
        });

    } catch (error) {
        console.error('Xatolik yuz berdi:', error);
    }
}

async function deleteBook(button) {
    const bookId = button.getAttribute('data-id');
    try {
        const response = await fetch(`https://trello.vimlc.uz/books/${bookId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            console.log(`${bookId} ochirildi`);
            fetchBooks();
        } else {
            console.error(`${response.status}`);
        }
    } catch (error) {
        console.error(error);
    }
}

async function addBook(event) {
    event.preventDefault();

    const input1 = document.querySelectorAll('.form-container input');
    const title = input1[0].value;
    const author = input1[1].value;
    const year = parseInt(input1[2].value);

    const booknew = { title, author, year };
    console.log(booknew);

    try {
        const response = await fetch('https://trello.vimlc.uz/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(booknew),
        });

        if (response.ok) {
            console.log('Yangi kitob qoshildi!');
            input1.forEach(input => input.value = '');
            fetchBooks();
        } else {
            console.error('Xatolik:', response.status);
        }
    } catch (error) {
        console.error('Xatolik yuz berdi:', error);
    }
}


document.getElementById('search').addEventListener('input', fetchBooks);

document.getElementById('new-book').addEventListener('submit', addBook);

fetchBooks();


async function deleteBook(button) {
    const bookId = button.getAttribute('data-id');
    try {
        const response = await fetch(`https://trello.vimlc.uz/books/${bookId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            console.log(`${bookId} ochirildi`);
            fetchBooks();
        } else {
            console.error(`${response.status}`);
        }
    } catch (error) {
        console.error(error);
    }
}

async function addBook(event) {
    event.preventDefault();

    const input1 = document.querySelectorAll('.form-container input');
    const title = input1[0].value;
    const author = input1[1].value;
    const year = parseInt(input1[2].value);

    const booknew = { title, author, year };
    console.log(booknew);

    try {
        const response = await fetch('https://trello.vimlc.uz/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(booknew),
        });

        if (response.ok) {
            console.log('Yangi kitob qoshildi!');
            input1.forEach(input => input.value = '');
            fetchBooks();
        } else {
            console.error('Xatolik:', response.status);
        }
    } catch (error) {
        console.error('Xatolik yuz berdi:', error);
    }
}

document.getElementById('new-book').addEventListener('submit', addBook);

fetchBooks();

