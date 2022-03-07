import React from 'react';

function OrderList(props) {
	return (
		<ol>
			{props.lista.map(function(data){
				return <li>{data}</li>
			})}
		</ol>
	);
}

export default OrderList;