import React, {useContext, useState} from 'react';
import {PostsActions, PostsContext} from '../../actions/posts.context';
import { Modal, Form, Button } from 'react-bootstrap';
import useInput from '../../hooks/useInput'
import Loading from '../Layout/Loading';
import Error from '../Layout/Error';

const EditPost = (props) => {
	const [currentValue, setCurrentValue] = useState({
		title: props.title,
		body: props.body
	})
	const {editPost, postActionProgress, resetError} = useContext(PostsActions);
	const {inProgress, postsMsg, postsError} = useContext(PostsContext);
	const [post, handleChange] = useInput(currentValue);

	const handleSubmit = (e) => {
		e.preventDefault();
		postActionProgress();
		editPost(post, props.id)
	}

	return (
		<Modal {...props} size="lg" centered>
			<Modal.Header closeButton>
				<Modal.Title>Edit Post "{props.title}"</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Error reset={resetError} error={postsError} message={postsMsg}/>
				{inProgress && <Loading title={`Editing ${props.type}`}/>}
				<Form onSubmit={handleSubmit}>
					<Form.Group>
						<Form.Label htmlFor="title">Title</Form.Label>
						<Form.Control type="text" name="title" value={post.title} onChange={handleChange} required/>
					</Form.Group>
					<Form.Group>
						<Form.Label htmlFor="body">Body</Form.Label>
						<Form.Control type="text" name="body" value={post.body} onChange={handleChange} required/>
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

export default EditPost;