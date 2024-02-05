import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
	function handleLogOut() {
		userService.logOut();
		setUser(null);
	}

	return (
		<nav className='navbar'>
			<div className='navbar__container'>
				<img src="/user_icon.png" alt="user icon" className='navbar__content'/>
				{/* <img src="/favorites_icon.png" alt="favorites icon" className='navbar__content'/> */}
				<img src="/flag_icon.png" alt="flag icon" className='navbar__content'/>
				<img src="/settings_icon.png" alt="settings icon" className='navbar__content'/>
				<Link to='#' onClick={handleLogOut} ><button className='navbar__content' id='logout-button'>LOG OUT</button></Link>
				</div>
		</nav>
	);
}
