import { useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';
export default function BookViewPage() {
	const { isbn } = useParams();
	const [book, setBook] = useState(null);

	console.log({ isbn: isbn });

	useEffect(() => {
		// fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}
		// `)
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		console.log({
		// 			data,
		// 		});
		// 		setBook(data.items[0].volumeInfo);
		// 	});

		let localBooks = JSON.parse(localStorage.getItem('books'));

		let foundBook = localBooks.find((book) => book.isbn === isbn);
		console.log(foundBook);
		setBook(foundBook);
	}, [isbn]);

	return (
		<section className='book-view-page'>
			{/* <h2>Boook View Page ===> {isbn}</h2> */}

			{!book && <p>loading...</p>}
			{book && (
				<div className='book-view-page-content'>
					<div className='bv-container'>
						<img src={book.thumbnail} alt={book.title} title={book.title} className='bv-image'/>
						<div className='bv-title'>{book.title}</div>
						<div className='bv-author'>{book.authors.join(', ')}</div>
						<div className='bv-desc'>{book.description}</div>
						<div className='bv-pubdate'>
							<span>Publised Date: </span>
							{book.publishedDate}
						</div>
						<div className='bv-cat'>
							<span>
								{book.categories?.join(' ,')}
							</span>
						</div>
						<div className='bv-pages'>
							<span>
								<span>Page Count: </span><strong>{book.pageCount}</strong>
							</span>
						</div>
						<div className='bv-isbn'>
							<span>
								<span>ISBN: </span><strong>{book.isbn}</strong>
							</span>
						</div>
					</div>
				</div>
			)}
		</section>
	);
}
