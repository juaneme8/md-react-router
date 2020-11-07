import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Nav() {
	return (
		<nav>
			<h3>Logo</h3>
			<ul>
				<li>
					<NavLink to='/'>Home</NavLink>
				</li>
				<li>
					<NavLink to='/about'>About</NavLink>
				</li>
				<li>
					<NavLink to='/shop'>Shop</NavLink>
				</li>
				<li>
					<NavLink to='/products'>Products</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
