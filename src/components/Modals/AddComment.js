import React, {useContext} from 'react';
import { CommentsActions, CommentsContext } from '../../actions/comments.context';
import {Modal, Button, Form} from 'react-bootstrap'
import Loading from '../Layout/Loading';
import Error from '../Layout/Error';
import useInput from '../../hooks/useInput';

const AddComment = (props) => {
    const { addComment, commentActionProgress, resetError } = useContext(CommentsActions);
	const { inProgress, commentsError, commentsMsg } = useContext(CommentsContext);
	const [ newComment, handleChange ] = useInput('');

	const handleSubmit = (e) => {
		e.preventDefault();
		commentActionProgress();
        addComment(newComment);
    };
    
    return (
        <Modal {...props} size="lg" centered>
        <Modal.Header closeButton>
            <Modal.Title>Add Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
								Add Comment
							</Button>
						</Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="dark" type="button" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>
    );
}

export default AddComment;
