let books = [];
  function addBook() {
            const bookName = document.getElementById('bookName').value;
            const authorName = document.getElementById('authorName').value;
            const bookDescription = document.getElementById('bookDescription').value;
            const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
            if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
                const book = {
                    name: bookName,
                    authorName: authorName,
                    bookDescription: bookDescription,
                    pagesNumber: pagesNumber
                };
                books.push(book);
                showbooks();
                clearInputs();
            } else {
                alert('Пожалуйста, заполните все поля корректно.');
            }
        }
function showbooks() {
    const booksDiv = books.map((book, index) => `<h1>номер книги: ${index + 1}</h1>
        <p><strong>Название книги: </strong>${book.name}</p>
        <p><strong>Имя автора:</strong> ${book.authorName}</p>
        <p><strong>Описание книги:</strong> ${book.bookDescription}</p>
        <p><strong>Количество страниц:</strong> ${book.pagesNumber} стр.</p>
        <button onclick="editbook(${index})">Редактировать</button>`
    );
    document.getElementById('books').innerHTML = booksDiv.join('');
}
function editbook(index) {
    const book = books[index];
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pagesNumber').value = book.pagesNumber;
    books.splice(index, 1); // Удалить старую запись
    showbooks(); // Обновить список
  }
 function clearInputs() {
            document.getElementById('bookName').value = '';
            document.getElementById('authorName').value = '';
            document.getElementById('bookDescription').value = '';
            document.getElementById('pagesNumber').value = '';
 }