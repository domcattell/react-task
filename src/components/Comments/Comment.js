import React from 'react';
import styles from '../../styles/Comments/comment.module.scss';

const Comment = (props) => {
    return (
        <div className={styles.comment}>
            <p>{props.title}</p>
            <p>{props.email}</p>
            <p>{props.body}</p>
        </div>
    );
}

export default Comment;
