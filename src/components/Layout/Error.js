import React from 'react';
import { Alert } from 'react-bootstrap';

const Error = (props) => {
	// setTimeout(() => {
	// 	props.reset();
	// }, 5000);

	// useEffect(() => {
	// 	props.reset();
	// }, []);

	return (
		<Alert variant="danger" show={props.error}>
			{props.message}
		</Alert>
	);
};

export default Error;
