//1)

const books = document.querySelectorAll('.book');
const asideBooks = document.querySelector('.books')
const ad = document.querySelector('.adv');
const body = document.querySelector('body');
const header = document.querySelectorAll('h2 a')[4];
console.log(books);

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';
ad.remove();

asideBooks.prepend(books[1]);
books[4].after(books[2]);
books[5].after(books[2]);
books[3].before(books[4]);

header.textContent = ' "Книга 3. this и Пропопипы Объектов" ';

// Книга 2
const book2Li =  books[0].querySelectorAll('li');

book2Li[4].before(book2Li[6]);
book2Li[9].after(book2Li[2]);
book2Li[4].before(book2Li[8]);


//Книга 5
const book5Li =  books[5].querySelectorAll('li');
console.log(book5Li);
book5Li[10].before(book5Li[8]);
book5Li[9].after(book5Li[5]);
book5Li[2].after(book5Li[9]);
book5Li[4].after(book5Li[2]);


// Книга 6
let book6Ul = books[2].querySelector('ul')
book6Ul.innerHTML += '<li>Глава 8: За пределами ES6</li>';

let book6Li = books[2].querySelectorAll('ul li')
book6Li[8].after(book6Li[10]);













 

