import React, { useContext } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { CommentsActions, CommentsContext } from '../../actions/comments.context';
import useInput from '../../hooks/useInput';
import Loading from '../Layout/Loading';
import Error from '../Layout/Error';
import lockModal from '../../helpers/lockModal'

//modal for adding a comment.
const AddComment = (props) => {
	const {onHide, show} = props;
	//grab state and actions from context
	const { addComment, commentActionProgress, resetError } = useContext(CommentsActions);
	const { inProgress, commentsError, commentsMsg } = useContext(CommentsContext);
	//use input hook for form input
	const [ newComment, handleChange ] = useInput('');

	//set inprogress boolean to true whilst request 
	//is in action. add comment if promise resolved,
	//show error if promise rejected
	const handleSubmit = (e) => {
		e.preventDefault();
		commentActionProgress();
		addComment(newComment);
	};

	return (
		<Modal show={show} onHide={inProgress ? lockModal : onHide} size="lg" centered>
			<Modal.Header closeButton>
				<Modal.Title>Add Comment</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Error reset={resetError} error={commentsError} message={commentsMsg} />
				<Loading isLoading={inProgress} title="Adding Comment" />
				<Form onSubmit={handleSubmit}>
					<Form.Group>
						<Form.Label htmlFor="name">Comment Name</Form.Label>
						<Form.Control
							type="text"
							name="name"
							value={newComment.name || ''}
							onChange={handleChange}
							placeholder="Comment Name"
							required
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label htmlFor="Comment">Comment</Form.Label>
						<Form.Control
							type="text"
							name="body"
							value={newComment.body || ''}
							onChange={handleChange}
							placeholder="Comment"
							required
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label htmlFor="Email">Email</Form.Label>
						<Form.Control
							type="email"
							name="email"
							value={newComment.email || ''}
							onChange={handleChange}
							placeholder="Email Address"
							required
						/>
					</Form.Group>
					<Button variant="success" type="submit">
						Add Comment
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

export default AddComment;
