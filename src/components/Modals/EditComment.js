import React, {useContext} from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import {CommentsActions, CommentsContext} from '../../actions/comments.context';
import useInput from '../../hooks/useInput'
import Loading from '../Layout/Loading';
import Error from '../Layout/Error';

const EditComment = (props) => {
	const {name, body, id, onHide, email} = props;
	//grab state from context
	const {editComment, commentActionProgress, resetError} = useContext(CommentsActions);
	const {inProgress, commentsMsg, commentsError} = useContext(CommentsContext);
	//use inputhook for form
	const [comment, handleChange] = useInput({name, body, email});

	//set inprogress boolean to true. edit comment,
	//else if error, show error message
	const handleSubmit = (e) => {
		e.preventDefault();
		commentActionProgress();
		editComment(comment, id)
	}

	return (
		<Modal show={props.show} onHide={inProgress ? false : props.onHide} size="lg" centered>
			<Modal.Header closeButton>
				<Modal.Title>Edit Comment "{name}"</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Error reset={resetError} error={commentsError} message={commentsMsg}/>
				<Loading isLoading={inProgress} title="Editing Comment"/>
				<Form onSubmit={handleSubmit}>
					<Form.Group>
						<Form.Label htmlFor="name">Comment Name</Form.Label>
						<Form.Control type="text" name="name" value={comment.name || ""} onChange={handleChange} required/>
					</Form.Group>
					<Form.Group>
						<Form.Label htmlFor="body">Body</Form.Label>
						<Form.Control type="text" name="body" value={comment.body || ""} onChange={handleChange} required/>
					</Form.Group>
					<Form.Group>
						<Form.Label htmlFor="email">Email</Form.Label>
						<Form.Control type="email" name="email" value={comment.email || ""} onChange={handleChange} required/>
					</Form.Group>
                    <Button variant="dark" type="submit">Save Edit</Button>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="dark" type="button" onClick={onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default EditComment;