import { useParams, useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';
export default function BookViewPage() {
	const { isbn } = useParams();
	const navigate = useNavigate();
	const [book, setBook] = useState(null);

	console.log({ isbn: isbn });

	useEffect(() => {
		let localBooks = JSON.parse(localStorage.getItem('books'));

		let foundBook = localBooks.find((book) => book.isbn === isbn);
		console.log(foundBook);
		setBook(foundBook);
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

		navigate('/shelf');
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
						<div className='bv-desc'>{book.description}</div>
						<div className='bv-pubdate'>
							<span>Publised Date: </span>
							{book.publishedDate}
						</div>
						<div className='bv-cat'>
							<span>{book.categories?.join(' ,')}</span>
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
					</div>

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
					</div>
				</div>
			)}
		</section>
	);
}
