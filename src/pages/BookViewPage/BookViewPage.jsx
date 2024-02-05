import { useParams, useNavigate, useLocation } from 'react-router-dom';

import { useEffect, useState } from 'react';
// import { json } from 'express';
export default function BookViewPage() {
	const location = useLocation();
	let params = new URLSearchParams(location.search);
	console.log(params.get('in-system'));
	const { isbn } = useParams();
	const navigate = useNavigate();
	const [book, setBook] = useState(null);

	console.log({ isbn: isbn });

	useEffect(() => {
		let localBooks = JSON.parse(localStorage.getItem('books'));

		let foundBook = localBooks.find((book) => book.isbn === isbn);
		console.log(foundBook);
		if (!foundBook) {
			// find out in database
			fetch('/api/books')
				.then((res) => res.json())
				.then((data) => {
					// console.log({
					// 	data: data,
					// });

					foundBook = data.books.find((book) => book.isbn === isbn);

					if (foundBook) {
						//
						// setShowRemove()
					}
					setBook(foundBook);
				});
		}
		setBook(foundBook);

		/// show remove button just in category
	}, [isbn]);

	const handleShelf = async (status) => {
		const response = await fetch('/api/shelves/' + isbn, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
			body: JSON.stringify({
				status: status,
				bookData: book,
			}),
		});
		const jsObj = await response.json();
		console.log({
			jsObj,
		});

		console.log('here...');
		navigate('/');
	};

	const handleRemoveFromShelf = async (shelfId) => {
		const response = await fetch('/api/shelves/' + shelfId, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		});

		const jsResponse = await response.json();
		if (jsResponse?.message === 'removed') {
			navigate('/');
		}
	};
	return (
		<section className='book-view-page'>
			{/* <h2>Boook View Page ===> {isbn}</h2> */}

			{!book && <p>loading...</p>}
			{book && (
				<div className='book-view-page-content'>
					<div className='bv-container'>
						<img
							src={book.thumbnail}
							alt={book.title}
							title={book.title}
							className='bv-image'
						/>
						<div className='bv-title'>{book.title}</div>
						<div className='bv-author'>{book.authors.join(', ')}</div>
						<div className='bv-pubdate'>
							<span>Publised Date: </span>
							{book.publishedDate}
						</div>
						<div className='bv-cat'>
							<span>
								{book.categories && book.categories.length > 0
									? book.categories.join(' ,')
									: '[no category listed]'}
							</span>
						</div>
						<div className='bv-pages'>
							<span>
								<span>Page Count: </span>
								<strong>{book.pageCount}</strong>
							</span>
						</div>
						<div className='bv-isbn'>
							<span>
								<span>ISBN: </span>
								<strong>{book.isbn}</strong>
							</span>
						</div>
						<div className='bv-desc'>{book.description}</div>

						<div className='searched-book__actions'>
							<button onClick={(e) => handleShelf('currently_reading')}>
								I am reading this
							</button>
							<button onClick={(e) => handleShelf('want_to_read')}>
								I want to read this
							</button>
							<button onClick={(e) => handleShelf('have_read')}>
								I have read this
							</button>

							{params.get('shelf-id') && (
								<button
									onClick={(e) => handleRemoveFromShelf(params.get('shelf-id'))}
									style={{ backgroundColor: 'red' }}
								>
									{/* Remove {params.get('shelf-id')} */}
									Remove
								</button>
							)}

							{}
						</div>
					</div>
				</div>
			)}
		</section>
	);
}
