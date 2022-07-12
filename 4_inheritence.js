/**
 * CONSTRUCTOR
 */

function Book(title, author, year) {
	console.log('Book Initialized.');
	this.title = title;
	this.author = author;
	this.year = year;
}
// get summary
Book.prototype.getSummary = function () {
	return `${this.title} was written by ${this.author} in ${this.year}`;
}

Book.prototype.onSale = true;


// Magazine Constructor
function Magazine(title, author, year, month) {
	Book.call(this, title, author, year);
	this.month = month;
}



// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);


// Instantiate Magazine Object
const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');
console.log('mag1', mag1); // -> Magazine {title: 'Mag One', author: 'John Doe', year: '2018', month: 'Jan'}


// Use magazine constructor
Magazine.prototype.constructor = Magazine;
console.log('mag1', mag1); // -> constructor of the [[prototype]] is  "Magazine(title, author, year, month)"