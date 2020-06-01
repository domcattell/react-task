import React from 'react';
import styles from '../../styles/Posts/posts_card.module.scss';

const PostsCard = (props) => {
    return (
        <div className={styles.posts_card}>
            <div>
                <h4 className={styles.posts_card__title}>{props.title}</h4>
            </div>
            <div>
                <p className={styles.posts_card__body}>{props.body}</p>
            </div>
            <div className={styles.posts_card__controls}>
                <p>Comments</p>
            </div>
        </div>
    );
}

export default PostsCard;
