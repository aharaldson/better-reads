// const Favourite = require('../../models/favourite');
const Book = require('../../models/book');

// module.exports = {
// 	addBook,
// };

// async function addToFav(req, res) {
// 	try {
// 		const newFav = await Favourite.create({
// 			user: req.user._id,
// 			book: req.body.bookId,
// 		});
// 		// const token = createJWT(user);
// 		res.json(newFav);
// 	} catch (err) {
// 		console.log(err);
// 		res.status(400).json(err);
// 	}
// }

async function getBooks(req, res) {
	let books = await Book.find();
	res.json({ books: books });
}

async function deleteBooks(req, res) {
	// const userID = req.params.userID;

	await Book.deleteMany();
	res.json({
		message: 'books deleted',
	});
}

module.exports = {
	getBooks,
	deleteBooks,
};
