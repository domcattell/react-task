import React, { useContext } from 'react';
import { PostsActions } from '../../actions/posts.context';
import { Form, Button } from 'react-bootstrap';
import useInput from '../../hooks/useInput';

const AddComment = () => {
	const { addComment } = useContext(PostsActions);
	const [ newComment, handleChange, resetForm ] = useInput('');

	const handleSubmit = (e) => {
		e.preventDefault();
		addComment(newComment);
	};

	return (
		<Form className="mt-4" onSubmit={handleSubmit}>
			<Form.Group>
				<Form.Label htmlFor="name">Comment Name</Form.Label>
				<Form.Control
					type="text"
					name="name"
					value={newComment.name}
					onChange={handleChange}
					placeholder="Comment Name"
				/>
			</Form.Group>
			<Form.Group>
				<Form.Label htmlFor="Comment">Comment</Form.Label>
				<Form.Control
					type="text"
					name="body"
					value={newComment.body}
					onChange={handleChange}
					placeholder="Comment"
				/>
			</Form.Group>
			<Form.Group>
				<Form.Label htmlFor="Email">Email</Form.Label>
				<Form.Control
					type="email"
					name="email"
					value={newComment.email}
					onChange={handleChange}
					placeholder="Email Address"
				/>
			</Form.Group>
			<Button variant="success" type="submit">
				Add Comment
			</Button>
		</Form>
	);
};

export default AddComment;
