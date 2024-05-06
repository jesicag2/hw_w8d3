// Homework

// Part 1: Exploring JavaScript Objects
    // You are tasked with creating a JavaScript program that simulates a digital library system. The program should allow users to 
    // add new books, search for books by title or author, and display information about the library's collection.

// Task 1: Create a constructor function for the Book object with properties for title, author, and pages.
// Task 2: Implement a method within the Book object to display book information.
// Task 3: Create an array to store book objects and implement functions to add new books and search for books by title or author.
// Task 4: Create functions that utilize the filter method to filter out books that contain more than 100 pages and the map method to add "Title: " and "Author: " to the book's title and author properties respectably.

class Library {

    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    displayBook = () => {
        console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`)
    }
}

let book1 = new Library('The Alchemist', 'Paulo Coehlo', 197)
let book2 = new Library('The Giver', 'Lois Lowry', 195)
book1.displayBook()
book2.displayBook()

class Library2 {

    constructor(){
        this.books = []
    }

    // constructor(title, author, pages){
    //     this.title = title;
    //     this.author = author;
    //     this.pages = pages;
    // }

    // displayBook = () => {
    //     console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`)
    // }

    addBook(title, author, pages){
        let newBook = new Library2(title, author, pages);
        this.books.push(newBook);
        console.log("Book has been added!");
    }

    searchByTitle(title){
        let foundTitle = this.books.filter(book => book.title.toLowerCase() == title.toLowerCase());
        return foundTitle;
    }

    searchByAuthor(author){
        let foundAuthor = this.books.filter(book => book.author.toLowerCase() == author.toLowerCase());
        return foundAuthor;
    }

}

let library = new Library2();

library.addBook('The Alchemist', 'Paulo Coehlo', 197);
library.addBook('The Giver', 'Lois Lowry', 195);
library.addBook('1984', 'George Orwell', 328);




// Part 2: Exploring Objects and Math in JavaScript
    // You are tasked with developing a JavaScript program that simulates a simple banking application. The program should allow users 
    // to create accounts, deposit funds, withdraw funds, and calculate interest based on specified rates.

// Task 1: Create a constructor function for the Account object with properties for accountNumber, balance, and owner.
// Task 2: Implement methods within the Account object to deposit and withdraw funds.
// Task 3: Create a method to calculate compound interest based on the balance and specified interest rate.

class Account {

    constructor(accountNumber, balance, owner){
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.owner = owner;
    }

    deposit(amount){
        this.balance += amount
        console.log(`Deposit has been sucessful, new balance: ${this.balance}`)
    }

    withdrawal(amount){
        if (amount <= this.balance){
            this.balance -= amount;
            console.log(`Withdrawal has been sucessful, new balance: ${this.balance}`)
        } else {
            console.log("Sorry insufficient funds for withdrawal of this amount.")
        }
    }

    earnings(interest, months){
        pass
        // C.I. = Principal (1 + Rate)^Time − Principal
    }
}

