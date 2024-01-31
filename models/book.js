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
		pageCount: {
			type: Number,
		},
		ISBN: {
			type: Number,
		},
	},
	{
		timestamps: true,
	}
);


module.exports = mongoose.model('Book', bookSchema);
