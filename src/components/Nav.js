import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
	return (
		<nav>
			<h3>Logo</h3>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
				<li>
					<Link to='/shop'>Shop</Link>
				</li>
				<li>
					<Link to='/products'>Products</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
