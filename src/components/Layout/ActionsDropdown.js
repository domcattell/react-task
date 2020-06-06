import React from 'react';
import { Dropdown } from 'react-bootstrap';

//Simple re-usable dropdown for controlling what to do with the content.
//has a delete option and edit option
const ActionsDropdown = (props) => {
	return (
		<Dropdown>
			<Dropdown.Toggle variant="dark" size="sm">
				Actions
			</Dropdown.Toggle>
			<Dropdown.Menu>
				<Dropdown.Item onClick={props.editOnClick}>Edit {props.type}</Dropdown.Item>
				<Dropdown.Item onClick={props.deleteOnClick}>Delete {props.type}</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default ActionsDropdown;
