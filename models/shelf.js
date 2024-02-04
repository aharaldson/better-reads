const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shelfSchema = new Schema(
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
		status: {
			type: String,
			required: true,
			enum: ['currently_reading', 'want_to_read', 'have_read'],
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Shelf', shelfSchema);
