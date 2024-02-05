import SearchBox from '../SearchBox/SearchBox';

export default function TopBar() {
	return (
		<header className='topbar'>
			<div className='topbar__content'>
				<a href='/' className='home-link'>
          <img src='/reader-logo.png' alt='better reads' className='main-logo' />
        </a>
				<SearchBox />
			</div>
		</header>
	);
}
