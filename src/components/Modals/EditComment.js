import React, {useContext, useState} from 'react';
import {PostsActions} from '../../actions/posts.context';
import { Modal, Form, Button, Container } from 'react-bootstrap';
import useToggle from '../../hooks/useToggle';
import useInput from '../../hooks/useInput'

const EditComment = (props) => {
	const [newComment, setNewComment] = useState({
		name: props.name,
		body: props.body
	})
	const {editComment} = useContext(PostsActions);
	const [comment, handleChange] = useInput(newComment);

	const handleSubmit = (e) => {
		e.preventDefault();
		editComment(comment, props.id)
	}
	
	return (
		<Modal {...props} size="lg" centered>
			<Modal.Header closeButton>
				<Modal.Title>Edit Comment "{props.name}"</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					<Form.Group>
						<Form.Label htmlFor="name">Name</Form.Label>
						<Form.Control type="text" name="name" value={comment.name} onChange={handleChange}/>
					</Form.Group>
					<Form.Group>
						<Form.Label htmlFor="body">Body</Form.Label>
						<Form.Control type="text" name="body" value={comment.body} onChange={handleChange}/>
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