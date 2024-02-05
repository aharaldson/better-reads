// const { json } = require('express');
const Review = require('../../models/review');
const Shelf = require('../../models/shelf');

module.exports = {
	addReview,
};

async function addReview(req, res) {
	const bookId = req.params.bookId;
	const shelfId = req.params.shelfId;

	// console.log({
	// 	shelfId,
	// 	bookId,
	// });

	// return res.json({
	// 	test: 'test',
	// });

	const bookShelf = await Shelf.findById(shelfId);
	if (bookShelf.status !== 'have_read') {
		return res.json({
			message: 'You can not add the review yet',
		});
	}

	try {
		const newReview = await Review.create({
			user: req.user._id,
			book: bookId,
			shelf: shelfId,
			rating: req.body.rating,
			content: req.body.content,
		});
		// const token = createJWT(user);
		res.json(newReview);
	} catch (err) {
		console.log(err);
		res.status(400).json(err);
	}
}
