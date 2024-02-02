import { useState } from 'react';
import SearchedDropdown from '../SearchedDropdown/SearchedDropdown';

import parseISBN from '../../utilities/parse.js';
const apiKey = 'AIzaSyDJhDSfMfltVGyTxuAHfUDP3QFFIKAdHg4';
export default function SearchBox() {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchedBooks, setSearchedBooks] = useState([]);
	const handleSubmit = async (e) => {
		e.preventDefault();

		fetch(
			'https://www.googleapis.com/books/v1/volumes?q=' +
				searchTerm +
				'&key=' +
				apiKey
		)
			.then((res) => res.json())
			.then((data) => {
				console.log({ data });
				let books = [];
				data.items.map((item) => {
					books.push(item.volumeInfo);
					return null;
				});
				setSearchedBooks(books);

				let parsedBooks = [];

				data.items.map((item) => {
					const { volumeInfo: bookItem } = item;

					//UCSC:32106019703807

					let parsedBookItem = {
						isbn: parseISBN(bookItem.industryIdentifiers[0].identifier),
						title: bookItem.title,
						description: bookItem.description,
						authors: bookItem.authors,
						categories: bookItem.categories,
						thumbnail: bookItem.imageLinks.thumbnail,
						pageCount: bookItem.pageCount,
						publishedDate: bookItem.publishedDate,
					};
					parsedBooks.push(parsedBookItem);
				});

				localStorage.setItem('books', JSON.stringify(parsedBooks));
			});
	};

	// function parseISBN(isbnStr) {
	// 	if (isbnStr.includes(':')) {
	// 		return isbnStr.split(':')[1];
	// 	} else {
	// 		return isbnStr;
	// 	}
	// }

	const handleNavigateToView = () => {
		setSearchedBooks([]);
	};

	return (
		<form className='search-box-container' onSubmit={handleSubmit}>
			<img src='/search.png' alt='maginfier' className='search-icon' />
			<input
				type='text'
				placeholder='title, author, ISBN, etc.'
				onChange={(event) => setSearchTerm(event.target.value)}
			/>
			{searchedBooks.length > 0 && (
				<SearchedDropdown
					books={searchedBooks}
					onNavigateToView={handleNavigateToView}
				/>
			)}
		</form>
	);
}
