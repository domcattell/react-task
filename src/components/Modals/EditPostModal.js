import React, { useContext } from 'react';
import { PostsActions, PostsContext } from '../../actions/posts.context';
import { Modal, Form, Button } from 'react-bootstrap';
import useInput from '../../hooks/useInput';
import Loading from '../Layout/Loading';
import Error from '../Layout/Error';
import lockModal from '../../helpers/lockModal';

const EditPost = (props) => {
	const { title, body, onHide, id } = props;
	//state and actions from context
	const { editPost, postActionProgress, resetError } = useContext(PostsActions);
	const { inProgress, postsMsg, postsError } = useContext(PostsContext);
	//input hook for controlling form input
	const [ post, handleChange ] = useInput({ title, body });

	//set inprogress boolean to true, whilst request
	//in action. if error, show error message, else
	//edit post
	const handleSubmit = (e) => {
		e.preventDefault();
		postActionProgress();
		editPost(post, id);
	};

	return (
		<Modal show={props.show} onHide={inProgress ? lockModal : onHide} size="lg" centered>
			<Modal.Header closeButton>
				<Modal.Title>Edit Post "{title}"</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Error reset={resetError} error={postsError} message={postsMsg} />
				<Loading isLoading={inProgress} title="Editing Post" />
				<Form onSubmit={handleSubmit}>
					<Form.Group>
						<Form.Label htmlFor="title">Title</Form.Label>
						<Form.Control type="text" name="title" value={post.title} onChange={handleChange} required />
					</Form.Group>
					<Form.Group>
						<Form.Label htmlFor="body">Body</Form.Label>
						<Form.Control type="text" name="body" value={post.body} onChange={handleChange} required />
					</Form.Group>
					<Button variant="dark" type="submit">
						Save Edit
					</Button>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="dark" type="button" onClick={onHide}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default EditPost;
