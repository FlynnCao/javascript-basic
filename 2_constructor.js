/**
 * CONSTRUCTOR
 */

function Book(title, author, year) {
	console.log('Book Initialized.');
	this.title = title;
	this.author = author;
	this.year = year;
	// this.getSummary = function () {
	// 	return `${this.title} was written by ${this.author} in ${this.year}`;
	// }
}
// get summary
Book.prototype.getSummary = function () {
	return `${this.title} was written by ${this.author} in ${this.year}`;
}

// get age
Book.prototype.getAge = function () {
	const years = new Date().getFullYear() - this.year;
	return `${this.title} is ${years} years old.`;
}

// instantiate an object
const book1 = new Book('Book One', 'Jin Dosh', 2010);
const book2 = new Book('Book Two', 'Elisabeth Ray', 1992);

console.log('book1', book1) // -> book1  Book {title: 'Book One', author: 'Jin Dosh', year: 2023}
console.log('book2', book2) // -> book2  Book {title: 'Book Two', author: 'Elisabeth Ray', year: 1992

console.log(book1.getSummary()) // -> Book One was written by Jin Dosh in 2023
console.log(book2.getSummary()) // -> Book Two was written by Elisabeth Ray in 1992

console.log(book1.getAge()); // ->  Book One is 12 years old.
console.log(book2.getAge()); // -> Book Two is 30 years old.

// revise / change the year
Book.prototype.revise = function (newYear) {
	this.year = newYear;
	this.revised = true;
}

console.log('book2', book2);
book2.revise(2022)
console.log('book2', book2);