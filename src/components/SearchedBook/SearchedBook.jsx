import { useNavigate } from 'react-router-dom';

import parseISBN from '../../utilities/parse.js';
export default function SearchedBook({ bookItem, onNavigateToView }) {
	const navigate = useNavigate();
	let bookISBN = bookItem.industryIdentifiers[0].identifier;
	const handleClick = () => {
		navigate('/books/' + parseISBN(bookItem.industryIdentifiers[0].identifier));
		onNavigateToView();
	};

	
	return (
		<li className='searched-book' onClick={handleClick}>
			<img
				src={bookItem.imageLinks.smallThumbnail}
				style={{
					width: '25px',
					height: '25px',
					backgroundPosition: 'cover',
					objectFit: 'cover',
				}}
				alt='small book cover'
			/>
			<h5>{bookItem.title}</h5>
			{/* <h6>{bookItem.authors.split(',').join(' , ')}</h6> */}

			
		</li>
	);
}
