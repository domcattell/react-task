import React, { useContext, useEffect } from 'react';
import { CommentsActions, CommentsContext } from '../../actions/comments.context';
import { Form, Button, Card, Accordion } from 'react-bootstrap';
import useInput from '../../hooks/useInput';
import Loading from '../Layout/Loading';
import Error from '../Layout/Error';

const AddComment = () => {
	const { addComment, commentActionProgress, resetError } = useContext(CommentsActions);
	const { inProgress, commentsError, commentsMsg } = useContext(CommentsContext);
	const [ newComment, handleChange ] = useInput('');

	const handleSubmit = (e) => {
		e.preventDefault();
		commentActionProgress();
        addComment(newComment);
	};

	return (
		<Accordion className="mt-4">
			<Card>
				<Card.Header>
					<Accordion.Toggle as={Button} variant="link" eventKey="0">
						Add New Comment
					</Accordion.Toggle>
				</Card.Header>
				<Accordion.Collapse eventKey="0">
					<Card.Body>
						<Error reset={resetError} error={commentsError} message={commentsMsg}/>
						{inProgress && <Loading title="Adding Comment"/>}
						<Form onSubmit={handleSubmit}>
							<Form.Group>
								<Form.Label htmlFor="name">Comment Name</Form.Label>
								<Form.Control
									type="text"
									name="name"
									value={newComment.name || ""}
									onChange={handleChange}
									placeholder="Comment Name"
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label htmlFor="Comment">Comment</Form.Label>
								<Form.Control
									type="text"
									name="body"
									value={newComment.body || ""}
									onChange={handleChange}
									placeholder="Comment"
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label htmlFor="Email">Email</Form.Label>
								<Form.Control
									type="email"
									name="email"
									value={newComment.email || ""}
									onChange={handleChange}
									placeholder="Email Address"
								/>
							</Form.Group>
							<Button variant="success" type="submit">
								Submit Comment
							</Button>
						</Form>
					</Card.Body>
				</Accordion.Collapse>
			</Card>
		</Accordion>
	);
};

export default AddComment;
