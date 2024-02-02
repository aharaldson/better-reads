import SearchedBook from '../SearchedBook/SearchedBook';

export default function SearchedDropdown({ books,onNavigateToView }) {
	return (
		<div className='searched-dropdown'>
			<ul className='searched-list'>
				{books.map((book) => {
					return <SearchedBook bookItem={book} onNavigateToView={onNavigateToView} />;
				})}
			</ul>
		</div>
	);
}
