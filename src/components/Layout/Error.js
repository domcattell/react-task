import React, { useEffect } from 'react';
import { Alert } from 'react-bootstrap';

//simple error component to display errors and remove errors.
//shows based props.error boolean, and displays message from props.message.
//on dismount, runs the props.reset function which resets error global state
//back to false. some components may not need to reset the error,
//so the reset function is optional

//this component could also use props.children, and render the loading indicator
//or component when this component is wrapped around another component as a container.

const Error = ({ reset, error, message }) => {
	//if reset props exists, run on on dismount
	useEffect(
		() => {
			if (reset) {
				return () => {
					reset();
				};
			}
		},
		[ reset ]
	);
	
	//if reset prop not present and message empty, return null
	if (!reset && !message) {
		return null;
	}

	//return the error with the message
	return (
		<Alert variant="danger" show={error}>
			{message}
		</Alert>
	);
};

export default Error;
