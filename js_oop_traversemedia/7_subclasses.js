class Book {
	constructor(title, author, year) {
		this.title = title;
		this.author = author;
		this.year = year;
	}
	getSummary() {
		return `${this.title} was written by ${this.author} in ${this.year}`;
	}

}

class Magazine extends Book {
	constructor(title, author, year, month) {
		super(title, author, year, month);
		this.month = month;
	}
}

const mag1 = new Magazine('Mag One', 'John Doe', 2018, 3);
console.log('mag1', mag1); // -> Magazine {title: 'Mag One', author: 'John Doe', year: 2018, month: 3};