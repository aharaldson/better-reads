import SearchBox from '../SearchBox/SearchBox';

export default function TopBar() {
	return (
		<header className='topbar'>
			<div className='topbar__content'>
				<img src='/reader-logo.png' alt='better reads' className='main-logo' />
				<SearchBox />
			</div>
		</header>
	);
}
