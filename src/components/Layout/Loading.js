import React from 'react';
import ReactLoading from 'react-loading';

//simple loading component that can be used across the app.
//check is props.isLoading is true, if so, displays the loading
//indicator. This could also be a HOC to dry up the code more instead
//of adding it into each component it needs, however, I feel it works
//well enough for the app.
const Loading = ({ title, isLoading }) => {
	return (
		isLoading && (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					padding: '1.5em'
				}}
			>
				<p>{title}</p>
				<ReactLoading type="bars" color="gray" height="5%" width="5%" />
			</div>
		)
	);
};

export default Loading;
