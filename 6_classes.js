class Book {
	constructor(title, author, year) {
		this.title = title;
		this.author = author;
		this.year = year;
	}
	getSummary() {
		return `${this.title} was written by ${this.author} in ${this.year}`;
	}

	revise(newYear) {
		this.year = newYear;
		this.revised = true;
	}


	static topBookStore() {
		return 'Bars & Koa'
	}

}

// Instantiate an object
const book1 = new Book('Book One', 'John Doe', 2013);
console.log('book1', book1);
/**
 * 
author
: 
"John Doe"
title
: 
"Book One"
year
: 
2013
 [[Prototype]]
: 
Object
constructor
: 
class Book
getSummary
: 
ƒ getSummary()
 */

book1.revise(2022);
console.log('book1', book1);

/**
 * author
: 
"John Doe"
revised
: 
true
title
: 
"Book One"
year
: 
2022
 */
// book1.topBookStore() #ERROR# book1.topBookStore is not a function
console.log(Book.topBookStore()) // static method can only invoked by Prototype