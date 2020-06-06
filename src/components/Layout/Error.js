import React, {useEffect} from 'react';
import { Alert } from 'react-bootstrap';

//simple error component to display errors and remove errors. 
//shows based props.error boolean, and displays message from props.message.
//on dismount, runs the props.reset function which resets error global state
//back to false. some components may not need to reset the error,
//so the reset function is optional

const Error = ({reset, error, message}) => {
	useEffect(() => {
		if(reset) {
			return () => {
				reset();
			}
		}
	}, [reset]);

	return (
		<Alert variant="danger" show={error}>
			{message}
		</Alert>
	);
};

export default Error;
