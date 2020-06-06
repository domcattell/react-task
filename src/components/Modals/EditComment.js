import React, {useContext, useState} from 'react';
import {CommentsActions, CommentsContext} from '../../actions/comments.context';
import { Modal, Form, Button } from 'react-bootstrap';
import useInput from '../../hooks/useInput'
import Loading from '../Layout/Loading';
import Error from '../Layout/Error';

const EditComment = (props) => {
	const [newComment, setNewComment] = useState({
		name: props.name,
		body: props.body
	})
	const {editComment, commentActionProgress, resetError} = useContext(CommentsActions);
	const {inProgress, commentsMsg, commentsError} = useContext(CommentsContext);
	const [comment, handleChange] = useInput(newComment);

	const handleSubmit = (e) => {
		e.preventDefault();
		commentActionProgress();
		editComment(comment, props.id)
	}

	return (
		<Modal {...props} size="lg" centered>
			<Modal.Header closeButton>
				<Modal.Title>Edit Comment "{props.name}"</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Error reset={resetError} error={commentsError} message={commentsMsg}/>
				{inProgress && <Loading title="Editing comment"/>}
				<Form onSubmit={handleSubmit}>
					<Form.Group>
						<Form.Label htmlFor="name">Name</Form.Label>
						<Form.Control type="text" name="name" value={comment.name} onChange={handleChange} required/>
					</Form.Group>
					<Form.Group>
						<Form.Label htmlFor="body">Body</Form.Label>
						<Form.Control type="text" name="body" value={comment.body} onChange={handleChange} required/>
					</Form.Group>
                    <Button variant="dark" type="submit">Save Edit</Button>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="dark" type="button" onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default EditComment;