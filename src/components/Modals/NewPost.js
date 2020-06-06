import React, { useContext } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { PostsActions, PostsContext } from '../../actions/posts.context';
import useInput from '../../hooks/useInput';
import Error from '../Layout/Error';
import Loading from '../Layout/Loading';

const NewPost = (props) => {
	const { addPost, resetError, postActionProgress } = useContext(PostsActions);
	const { postsMsg, postsError, inProgress } = useContext(PostsContext);
	const [ post, handleChange ] = useInput('');

	const handleSubmit = (e) => {
		e.preventDefault();
		postActionProgress();
		addPost(post);
	};

	return (
		<Modal {...props} size="lg" centered>
			<Modal.Header closeButton>
				<Modal.Title>Add A New Post</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Error reset={resetError} error={postsError} message={postsMsg}/>
				{inProgress && <Loading title="Adding post"/>}
				<Form onSubmit={handleSubmit}>
					<Form.Label>Post Title</Form.Label>
					<Form.Group>
						<Form.Control
							type="text"
							name="title"
							value={post.title || ''}
							onChange={handleChange}
                            placeholder="Title"
                            required
						/>
					</Form.Group>

					<Form.Group>
						<Form.Label>Post</Form.Label>
						<Form.Control
							type="text"
							name="body"
							value={post.body || ''}
							onChange={handleChange}
                            placeholder="Body"
                            required
						/>
					</Form.Group>

					<Button type="submit">Submit</Button>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="dark" type="button" onClick={props.onHide}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default NewPost;
