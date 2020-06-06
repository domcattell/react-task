import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Loading from '../Layout/Loading';

/**
 * re-usable delete modal component.
 * This can be used to delete comments, albums, posts etc from the app
 * props.type is the content type, eg, post, comment.
 * props.deleteFunction is the function passed through to delete the type
 * of content being deleted, typically passed from global state through it's
 * parent component. 
 */

	const DeleteModal = (props) => {
	const handleDelete = (e) => {
		e.preventDefault();
		props.progressFunction();
		props.deleteFunction(props.id);
	};

	return (
		<Modal {...props} size="md" centered>
			<Modal.Header closeButton>
				<Modal.Title>Delete {props.type}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{props.inProgress && <Loading title={`Deleting ${props.type}`} />}
				<p>Are you sure you want to delete this {props.type.toLowerCase()}?</p>
			</Modal.Body>
			<Modal.Footer className="d-flex justify-content-between">
				<Button variant="danger" onClick={handleDelete}>
					Delete
				</Button>
				<Button variant="dark" onClick={props.onHide}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default DeleteModal;
