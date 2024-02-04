const Shelf = require('../../models/shelf');
const Book = require('../../models/book');

module.exports = {
	addToShelf,
	getbyUserID,
	deleteShelfs,
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
	}).populate(['book']);
	res.json({
		shelves: allShelfs,
	});
}

async function deleteShelfs(req, res) {
	// const userID = req.params.userID;

	await Shelf.deleteMany();
	res.json({
		message: 'deleted',
	});
}
