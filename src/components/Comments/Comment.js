import React, {useContext} from 'react';
import {PostsActions} from '../../actions/posts.context';
import styles from '../../styles/Comments/comment.module.scss';
import { Dropdown } from 'react-bootstrap';
import EditComment from '../Modals/EditComment'
import DeleteComment from '../Modals/DeleteModal'
import useToggle from '../../hooks/useToggle';

/**
 * this component displays a comments data,
 * and opens two modals for editing and deleting a comment
 * They will only render if the boolean state is true, which is set at
 * the bottom of the return value. Without conditionally rendering them,
 * then the modals for every comment component would render on mount.
 */

const Comment = (props) => {
	const [editModal, toggleEditModal] = useToggle(false)
	const [deleteModal, toggleDeleteModal] = useToggle(false)
	const {deleteComment} = useContext(PostsActions)

	return (
		<div className={styles.comment}>
			<p className={styles.comment__email}>{props.email}</p>
			<p className={styles.comment__name}>{props.name}</p>
			<p className={styles.comment__body}>{props.body}</p>
            <div className={styles.comment__controls}>
			<Dropdown>
				<Dropdown.Toggle variant="dark"size="sm">
					Actions
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item onClick={toggleDeleteModal}>Delete Comment</Dropdown.Item>
					<Dropdown.Item onClick={toggleEditModal}>Edit Comment</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
            </div>
			{deleteModal && <DeleteComment id={props.id} type="Comment" deleteFunction={deleteComment} name={props.name} show={deleteModal} onHide={toggleDeleteModal}/>}
			{editModal && <EditComment id={props.id} name={props.name} body={props.body} show={editModal} onHide={toggleEditModal}/>}
		</div>
	);
};

export default Comment;
