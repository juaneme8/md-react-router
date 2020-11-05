import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Shop() {
	const [arr, setArr] = useState([]);

	useEffect(() => {
		fetchItems();
	}, []);

	const fetchItems = async () => {
		const res = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
		const data = await res.json();
		setArr(data.data);
	};

	return (
		<div>
			<h1>Shop Page</h1>
			{arr
				? arr.map(item => (
						<li key={item.itemId}>
							<Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
						</li>
				  ))
				: 'CARGANDO'}
		</div>
	);
}

export default Shop;
