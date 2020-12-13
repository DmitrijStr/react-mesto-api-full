import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const NavBar = ({ email, logout }) => {
	const currentUser = React.useContext(CurrentUserContext);

	return (
		<div className="navbar">
			<p className="navbar__email">{currentUser.email}</p>
			<button className="navbar__logout-button" onClick={logout}>Выйти</button>
		</div>
	)
}

export default NavBar;