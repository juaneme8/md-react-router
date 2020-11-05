import React, { useEffect, useState } from 'react';

function ItemDetails(props) {
	const [item, setItem] = useState({});
	useEffect(() => {
		fetchItem();
	}, []);

	const fetchItem = async () => {
		const res = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${props.match.params.id}`);
		const data = await res.json();
		setItem(data.data.item);
	};

	return (
		<>
			<h1>{item.name}</h1>;{item.images ? <img src={item.images.background} /> : ''}
		</>
	);
}

export default ItemDetails;
