import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Loading from '../Layout/Loading';
import Error from '../Layout/Error';
import lockModal from '../../helpers/lockModal'

/**
 * re-usable delete modal component.
 * This can be used to delete comments, albums, posts etc from the app
 * props.type is the content type, eg, post, comment.
 * props.deleteFunction is the function passed through to delete the type
 * of content being deleted, typically passed from global state through it's
 * parent component. 
 */

	const DeleteModal = (props) => {
	const {type, id, show, deleteFunction, onHide, progressFunction, isLoading, resetError, message, error} = props
	const handleDelete = (e) => {
		e.preventDefault();
		progressFunction();
		deleteFunction(id);
	};

	return (
		<Modal show={show} onHide={isLoading ? lockModal : onHide} size="md" centered>
			<Modal.Header closeButton>
				<Modal.Title>Delete {type}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Error error={error} reset={resetError} message={message}/>
				<Loading isLoading={isLoading} title={`Deleting ${type}`} />
				<p>Are you sure you want to delete this {type.toLowerCase()}?</p>
			</Modal.Body>
			<Modal.Footer className="d-flex justify-content-between">
				<Button variant="danger" onClick={handleDelete}>
					Delete
				</Button>
				<Button variant="dark" onClick={onHide} disabled={isLoading ? true: false}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default DeleteModal;
