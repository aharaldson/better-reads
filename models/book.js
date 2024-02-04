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
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Book', bookSchema);

// //{
// 	isbn: '0439139597',
// 	title: 'Harry Potter and the Goblet of Fire',
// 	description:
// 		'Young wizard-in-training Harry Potter prepares for a competition between Hogwarts School of Magic and two rival schools, develops a crush on Cho Chang, and wishes above all to be a normal fourteen-year-old.',
// 	authors: [ 'J. K. Rowling' ],
// 	thumbnail:
// 		'http://books.google.com/books/content?id=5zaozwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
// 	pageCount: 0,
// 	publishedDate: '2000'
// }
