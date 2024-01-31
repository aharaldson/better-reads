// const Favourite = require('../../models/favourite');

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
