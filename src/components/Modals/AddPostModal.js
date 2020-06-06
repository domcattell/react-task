import React, { useContext } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { PostsActions, PostsContext } from '../../actions/posts.context';
import useInput from '../../hooks/useInput';
import Error from '../Layout/Error';
import Loading from '../Layout/Loading';
import lockModal from '../../helpers/lockModal';

const NewPost = (props) => {
	//state and action from context 
	const { addPost, resetError, postActionProgress } = useContext(PostsActions);
	const { postsMsg, postsError, inProgress } = useContext(PostsContext);
	//use hook for controlling form input
	const [ post, handleChange ] = useInput('');

	//set inprogress boolean to true
	//add post if resolved, else show
	//error message if error
	const handleSubmit = (e) => {
		e.preventDefault();
		postActionProgress();
		addPost(post);
	};

	return (
		<Modal show={props.show} onHide={inProgress ? lockModal : props.onHide} size="lg" centered>
			<Modal.Header closeButton>
				<Modal.Title>Add A New Post</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Error reset={resetError} error={postsError} message={postsMsg}/>
				<Loading isLoading={inProgress} title="Adding post"/>
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
