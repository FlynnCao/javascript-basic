/**
 * PRIMARY TYPE
 */

// Every JS Type Variable is an object
let greeting = 'Hello World';
let greeting_piece = greeting.substring(0, 5);
console.log('greeting_piece:', greeting_piece); // -> hello

console.log(typeof greeting); // -> string
const wenhou = new String('你好');
console.log(typeof wenhou); // -> object


// 'window' is the parent object of everything that only available in Browser environment
console.log(window) // ->  {window: Window, self: Window, document: document, name: '<<BS_START>>{"bs":{"hardReload":true,"scroll":{"x":0,"y":0}}}<<BS_START>>', location: Location, 
console.log('this', this) // points to 'window' object by default

/**
 * OBJECT
 */
const book1 = {
	title: 'Book One',
	author: 'Jin Doe',
	year: '2015',
	getSummary: function () {
		return `${this.title} was written by ${this.author} in ${this.year}`;
	}
}
const book2 = {
	title: 'Book Two',
	author: 'Eric Snow',
	year: '2020',
	getSummary: function () {
		return `${this.title} was written by ${this.author} in ${this.year}`;
	}
}
console.log('book1', book1)
console.log('book1.title: ', book1.title) // -> book1.title:  Book One
console.log('book1.getSummary():', book1.getSummary()) // -> book1.getSummary(): Book One was written by John Doe in 2013

console.log(Object.values(book1)) // ->  ['Book One', 'Jin Doe', '2015', ƒ]
console.log(Object.values(book2)) // ->  ['Book Two', 'Eric Snow', '2020', ƒ]