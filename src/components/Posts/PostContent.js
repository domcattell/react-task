import React, {useEffect, useContext} from 'react';
import styles from '../../styles/Posts/post_content.module.scss';
import { PostsActions, PostsContext } from '../../actions/posts.context';
import CardContainer from '../Layout/CardContainer';

const PostContent = (props) => {
    const { getPost, clearPost } = useContext(PostsActions);
	const { post } = useContext(PostsContext);

	useEffect(() => {
        //get the current post
        getPost(props.id);

        //on component dismount, remove the current post from global state
        return () => {
            clearPost();
        }
    }, [props.id]);
    
    return (
        <div className={styles.post_content}>
            <h4 className={styles.post_content__title}>{post.title}</h4>
            <p className={styles.post_content__body}>{post.body}</p>
        </div>
    );
}

export default PostContent;
