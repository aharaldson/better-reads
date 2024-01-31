const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favouriteSchema = new Schema(
	{
		book: {
			type: mongoose.Schema.ObjectId,
			ref: 'Book',
			required: true,
		},
		user: {
			type: mongoose.Schema.ObjectId,
			ref: 'User',
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Favourite', favouriteSchema);
