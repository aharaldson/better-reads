const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
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
		rating: {
			type: Number,
			required: true,
			enum: [1, 2, 3, 4, 5],
		},
		content: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Review', reviewSchema);
