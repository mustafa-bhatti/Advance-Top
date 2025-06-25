const playerN = {
    name : "mustafa",
    marker : "X"
}
// console.log(playerN.name)
// console.log(playerN["marker"])

// using function to create an object

function player(name,marker) {
    if (!new.target){
        throw Error("you must use the 'new' constructor when calling this function")
    }
    this.name = name
    this.marker = marker
}

const player1 = new player("ahmad","O")
const player2 = new player("bilal","X")
// console.log(player1.name)
// creating a book object

const book = {
    nameBook : "The Hobbit",
    author : "J.R.R Tolkein",
    pages : 297,
    read: false,
    info  : function(){
        const isRead = (val) => val == true ? 'read' : 'not read yet';
        return `${book.nameBook} by ${book.author},${book.pages} pages, ${isRead(book.read)} `;
    }
}
this.color = 'red';
// console.log( window.color);

// console.log(book.info())

function newBook(name,author){
    let BookName = name;
    return {BookName , author}
}

const book1 =newBook("Hobbit","J.R.R")

const Name = book1.BookName;
const author = book1.author;
console.log({Name,author})
