import React, { useEffect, useContext } from 'react';
import styles from '../../styles/Posts/post_content.module.scss';
import { PostsActions, PostsContext } from '../../actions/posts.context';
import Loading from '../Layout/Loading';
import Error from '../Layout/Error';

/**
 * simple component for displaying the content of a post.
 * pulls what is needed from global state using the useContext hook
 * @getPost uses the props.id as param and gets the post content
 * @postLoading initially set to true in global state, however
 * once @getPost has finished, it will change @postLoading state
 * to false. @clearPost will then set @postLoading to true on dismount
 * and clear the post from global state.
 * Loading component will show based @postLoading value
 */

const PostContent = (props) => {
	const { getPost, clearPost, resetError } = useContext(PostsActions);
	const { post, loading, postsError, postsMsg } = useContext(PostsContext);

	useEffect(() => {
		getPost(props.id);
		return () => {
			clearPost();
		};
	},[]);

	return (
		<div>
			<Error reset={resetError} error={postsError} message={postsMsg} />
			{loading ? (
				<Loading title="Post" />
			) : (
				<div className={styles.post_content}>
					<h4 className={styles.post_content__title}>{post.title}</h4>
					<p className={styles.post_content__body}>{post.body}</p>
				</div>
			)}
		</div>
	);
};

export default PostContent;
