import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';

import BookViewPage from '../BookViewPage/BookViewPage';
import NavBar from '../../components/NavBar/NavBar';
import TopBar from '../../components/TopBar/TopBar';

export default function App() {
	const [user, setUser] = useState(getUser());

	return (
		<main className='App'>
			{user ? (
				<>
					<TopBar />
					<Routes>
						{/* Route components in here */}
						<Route path='/orders/new' element={<NewOrderPage />} />
						<Route path='/books/:isbn' element={<BookViewPage />} />
						<Route path='/orders' element={<OrderHistoryPage />} />
					</Routes>
					<NavBar user={user} setUser={setUser} />
				</>
			) : (
				<AuthPage setUser={setUser} />
			)}
		</main>
	);
}
