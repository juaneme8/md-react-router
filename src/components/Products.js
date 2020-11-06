import React from 'react';
import queryString from 'query-string';
function Products(props) {
	const result = queryString.parse(props.location.search);
	console.log(result);
	return (
		<div>
			<h1>Productos</h1>
		</div>
	);
}

export default Products;
