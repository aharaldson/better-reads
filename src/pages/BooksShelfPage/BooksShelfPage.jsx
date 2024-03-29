import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export default function BooksShelfPage() {
	const [shelfBooks, setShelfBooks] = useState([]);

	const [currentlyReading, setCurrentlyReading] = useState([]);
	const [wantToRead, setWantToRead] = useState([]);
	const [haveRead, setHaveRead] = useState([]);

	const [seeAllCurrent, setSeeAllCurrent] = useState(false);
	const [seeAllWant, setSeeAllWant] = useState(false);
	const [seeAllRead, setSeeAllRead] = useState(false);

	useEffect(() => {
		fetch('/api/shelves', {
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setCurrentlyReading(
					data.shelves.filter((book) => book.status === 'currently_reading')
				);
				setWantToRead(
					data.shelves.filter((book) => book.status === 'want_to_read')
				);
				setHaveRead(data.shelves.filter((book) => book.status === 'have_read'));
			});
	}, []);

	const handleSeeAll = (shelfTag) => {
		if (shelfTag === 'want_to_read') {
			setSeeAllWant(!seeAllWant);
		} else if (shelfTag === 'have_read') {
			setSeeAllRead(!seeAllRead);
		} else if (shelfTag === 'currently_reading') {
			setSeeAllCurrent(!seeAllCurrent);
		} else {
		}
	};
	return (
		<div className='shelf'>
			<h2 className='shelf-title'>My Shelves</h2>
			<div className='shelf__main'>
				<div className='shelf_section'>
					<div className='shelf__header'>
						<span className='shelf__header-chip'>Currently Reading</span>
					</div>
					<div className={`shelf__body ${seeAllCurrent ? 'see-all' : ''}`}>
						<div className='shelf__body-list'>
							{currentlyReading.map((bookItem) => {
								return (
									<Link
										to={`/books/${bookItem.book.isbn}?shelf-id=${bookItem._id}`}
										className='shelf_book_item'
									>
										<img
											src={bookItem.book.thumbnail}
											alt=''
											className='shelf_book_cover'
										/>
										{seeAllCurrent && (
											<span>
												{bookItem.book.title + ', ' + bookItem.book.authors[0]}
											</span>
										)}
									</Link>
								);
							})}
						</div>

						<button
							className='shelf__body-button'
							onClick={() => handleSeeAll('currently_reading')}
						>
							{seeAllCurrent ? 'Collapase' : 'See All'}
							{/* See All */}
						</button>
					</div>
				</div>
				<div className='shelf_section'>
					<div className='shelf__header'>
						<span className='shelf__header-chip'>Want to read</span>
					</div>
					<div className={`shelf__body ${seeAllWant ? 'see-all' : ''}`}>
						<div className='shelf__body-list'>
							{wantToRead.map((bookItem) => {
								return (
									<Link
										to={`/books/${bookItem.book.isbn}?shelf-id=${bookItem._id}`}
										className='shelf_book_item'
									>
										<img
											src={bookItem.book.thumbnail}
											alt=''
											className='shelf_book_cover'
										/>
										{seeAllWant && (
											<span>
												{bookItem.book.title + ', ' + bookItem.book.authors[0]}
											</span>
										)}
									</Link>
								);
							})}
						</div>
						<button
							className='shelf__body-button'
							onClick={() => handleSeeAll('want_to_read')}
						>
							{seeAllWant ? 'Collapse' : 'See All'}
						</button>
					</div>
				</div>
				<div className='shelf_section'>
					<div className='shelf__header'>
						<span className='shelf__header-chip'>Have Read</span>
					</div>
					<div className={`shelf__body ${seeAllRead ? 'see-all' : ''}`}>
						<div className='shelf__body-list'>
							{haveRead.map((bookItem) => {
								return (
									<Link
										to={`/books/${bookItem.book.isbn}?shelf-id=${bookItem._id}`}
										className='shelf_book_item'
									>
										<img
											src={bookItem.book.thumbnail}
											alt=''
											className='shelf_book_cover'
										/>
										{seeAllRead && (
											<span>
												{bookItem.book.title + ', ' + bookItem.book.authors[0]}
											</span>
										)}
									</Link>
								);
							})}
						</div>

						<button
							className='shelf__body-button'
							onClick={() => handleSeeAll('have_read')}
						>
							{seeAllRead ? 'Collapase' : 'See All'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
