const Shelf = require('../../models/shelf');
const Book = require('../../models/book');
const Review = require('../../models/review');

module.exports = {
	addToShelf,
	getbyUserID,
	deleteShelfs,
	removeFromShelf,
};

async function addToShelf(req, res) {
	try {
		let anyBook = null;
		let newBook = null;
		anyBook = await Book.findOne({
			isbn: req.params.bookISBN,
		});

		if (!anyBook) {
			newBook = await Book.create(req.body.bookData);
		}

		if (newBook) {
			let shelfResponse = await Shelf.create({
				user: req.user._id,
				book: newBook._id,
				status: req.body.status,
			});

			return res.json(shelfResponse);
		}

		let existingShelf = null;
		if (anyBook) {
			existingShelf = await Shelf.findOne({
				// book: req.body.bookId,
				book: anyBook._id,
				user: req.user._id,
			});
		}

		// existingShelf = await Shelf.findOne({
		// 	// book: req.body.bookId,
		// 	bookISBN: req.params.bookISBN,
		// 	user: req.user._id,
		// });

		let updatedShelf = null;
		if (existingShelf) {
			console.log('here....');
			updatedShelf = await Shelf.findByIdAndUpdate(existingShelf._id, {
				status: req.body.status,
			});

			return res.json(updatedShelf);
			// return;
		}

		// let anyBook = await Book.findOne({
		// 	bookISBN: req.params.bookISBN,
		// });

		// let shelfResponse = null;
		// if (anyBook) {
		// 	shelfResponse = await Shelf.create({
		// 		user: req.user._id,
		// 		book: anyBook._id,
		// 		status: req.body.status,
		// 	});

		// 	return res.json(shelfResponse);
		// }

		// const newShelf = await Shelf.create({
		// 	user: req.user._id,
		// 	book: newBook._id,
		// 	status: req.body.status,
		// });
		// res.json(newShelf);
	} catch (err) {
		console.log(err);
		res.status(400).json(err);
	}
}

async function getbyUserID(req, res) {
	const userID = req.user._id;

	const allShelfs = await Shelf.find({
		user: userID,
	}).populate(['book', 'user']);

	const composedShelfs = [];

	// allShelfs.map(async (shelf) => {
	// 	// composedShelfs.push(shelf.toObject());
	// 	let shelfObj = shelf.toObject();
	// 	shelfObj.reviews = [];
	// 	const allBookRevies = await Review.find({
	// 		book: shelf.book._id,
	// 	}).populate(['user', 'shelf']);

	// 	allBookRevies.map((rev) => {
	// 		let bookRev = rev.toObject();
	// 		shelfObj.reviews.push(bookRev);
	// 	});

	// 	composedShelfs.push(shelfObj);
	// });

	// Assuming composedShelfs is an array that you've defined somewhere above this snippet
	let composedShelfsPromises = allShelfs.map(async (shelf) => {
		let shelfObj = shelf.toObject();
		shelfObj.reviews = [];
		const allBookReviews = await Review.find({
			book: shelf.book._id,
		}).populate(['user', 'shelf']);

		allBookReviews.forEach((rev) => {
			let bookRev = rev.toObject();
			shelfObj.reviews.push(bookRev);
		});

		return shelfObj;
	});

	Promise.all(composedShelfsPromises)
		.then((composedShelfs) => {
			// At this point, composedShelfs is an array of all the shelf objects with their reviews
			// You can now work with the fully composed shelf objects
			console.log(composedShelfs);
			// Any further processing that depends on composedShelfs being fully populated
			res.json({
				count: allShelfs.length,
				shelves: composedShelfs,
			});
		})
		.catch((error) => {
			// Handle any errors that might occur during the fetching of reviews
			console.error('Error fetching shelf reviews:', error);
		});
}

async function deleteShelfs(req, res) {
	// const userID = req.params.userID;

	await Shelf.deleteMany();
	res.json({
		message: 'deleted',
	});
}

async function removeFromShelf(req, res) {
	// const userID = req.params.userID;

	// console.log({
	// 	shelfId: req.params.id,
	// 	userId: req.user._id,
	// });
	// return res.json({
	// 	test: 'working',
	// });

	try {
		const deleted = await Shelf.deleteOne({
			_id: req.params.id,
			user: req.user._id,
		});

		res.json({
			message: 'removed',
		});
	} catch (err) {
		res.json({
			error: err.message,
		});
	}

	// await Shelf.deleteMany();
	// res.json({
	// 	message: 'deleted',
	// });
}
