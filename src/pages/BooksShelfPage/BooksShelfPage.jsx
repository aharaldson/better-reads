import { useEffect, useState } from 'react';
export default function BooksShelfPage() {
	const [shelfBooks, setShelfBooks] = useState([]);

	useEffect(() => {
		fetch('/api/shelves', {
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setShelfBooks(data.shelves);
			});
	}, []);
	return (
		<div className='shelf'>
			<h2 className='shelf-title'>Books Shelf</h2>

			<ul className='shelf-list'>
				{shelfBooks &&
					shelfBooks.length > 0 &&
					shelfBooks.map((shelfBook) => (
						<li className='shelf-item'>
							{/* <img
								src={shelfBook.imageLinks.smallThumbnail}
								style={{
									width: '25px',
									height: '25px',
									backgroundPosition: 'cover',
									objectFit: 'cover',
								}}
								alt='small book cover'
							/> */}
							<strong>{shelfBook.book.title}</strong>{' '}
							<span className={`${shelfBook.status}`} id="status-tag">{shelfBook.status}</span>
						</li>
					))}
			</ul>
		</div>
	);
}
