const Review = require('../../models/review');

module.exports = {
	addReview,
};

async function addReview(req, res) {
	try {
		const newReview = await Review.create({
			user: req.user._id,
			book: req.body.bookId,
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
