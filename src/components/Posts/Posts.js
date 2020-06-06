import React, { useContext, useEffect } from 'react';
import { PostsContext, PostsActions } from '../../actions/posts.context';
import PostsCard from './PostsCard';
import GridContainer from '../Layout/GridContainer';
import Loading from '../Layout/Loading';
import Error from '../Layout/Error';

const Posts = (props) => {
	//get actions and state from context
	const { getUserPosts, clearUserPosts, resetError } = useContext(PostsActions);
	const { userPosts, loading, postsError, postsMsg } = useContext(PostsContext);

	//get users posts. on dismount, clear loading and error message
	useEffect(
		() => {
			getUserPosts(props.id);
			return () => {
				clearUserPosts();
			};
		},
		[getUserPosts, clearUserPosts, props.id]
	);
	
	//displays a card view using "PostsCard" for each users post. if no posts length is 0,
	//display a message saying the user has no posts
	return (
		<>
			<Error reset={resetError} error={postsError} message={postsMsg}/>
			<Loading isLoading={loading} title="Users Posts" />
			<GridContainer>
				{!userPosts.length && <h4>No posts to show</h4>}
				{userPosts.map((post) => (
					<PostsCard key={post.id} id={post.id} title={post.title} body={post.body} />
				))}
			</GridContainer>
		</>
	);
};

export default Posts;
