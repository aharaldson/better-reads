const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		author: {
			type: String,
		},
		description: {
			type: String,
		},
		authors: {
			type: [String],
		},
		pageCount: {
			type: Number,
		},
		isbn: {
			type: String,
		},
		publishedDate: {
			type: String,
		},
		thumbnail: {
			type: String,
		},
		review: {
			type: mongoose.Schema.ObjectId,
			ref: 'Review',
			// required: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Book', bookSchema);
