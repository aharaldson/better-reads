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

	// let composedBooks =[];

	res.json({ books: books });
}

// Assuming composedShelfs is an array that you've defined somewhere above this snippet
// let composedShelfsPromises = allShelfs.map(async (shelf) => {
// 	let shelfObj = shelf.toObject();
// 	shelfObj.reviews = [];
// 	const allBookReviews = await Review.find({
// 			book: shelf.book._id,
// 	}).populate(['user', 'shelf']);

// 	allBookReviews.forEach((rev) => {
// 			let bookRev = rev.toObject();
// 			shelfObj.reviews.push(bookRev);
// 	});

// 	return shelfObj;
// });

// Promise.all(composedShelfsPromises).then(composedShelfs => {
// 	// At this point, composedShelfs is an array of all the shelf objects with their reviews
// 	// You can now work with the fully composed shelf objects
// 	console.log(composedShelfs);
// 	// Any further processing that depends on composedShelfs being fully populated
// }).catch(error => {
// 	// Handle any errors that might occur during the fetching of reviews
// 	console.error("Error fetching shelf reviews:", error);
// });

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
