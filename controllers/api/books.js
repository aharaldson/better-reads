const Book = require('../../models/book');

async function getBooks(req, res) {
	let books = await Book.find();

	res.json({ books: books });
}

async function deleteBooks(req, res) {

	await Book.deleteMany();
	res.json({
		message: 'books deleted',
	});
}

module.exports = {
	getBooks,
	deleteBooks,
};
