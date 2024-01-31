const Shelf = require('../../models/shelf');

module.exports = {
	addToShelf,
};

async function addToShelf(req, res) {
	try {
		let existingShelf = null;

		existingShelf = await Shelf.findOne({
			book: req.body.bookId,
			user: req.user._id,
		});

		let updatedShelf = null;
		if (existingShelf) {
			updatedShelf = await Shelf.findByIdAndUpdate(existingShelf._id, {
				status: req.body.status,
			});

			res.json(updatedShelf);
			return;
		}

		const newShelf = await Shelf.create({
			user: req.user._id,
			book: req.body.bookId,
			status: req.body.status,
		});
		res.json(newReview);
	} catch (err) {
		console.log(err);
		res.status(400).json(err);
	}
}
