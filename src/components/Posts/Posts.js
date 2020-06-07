import React, { useContext, useEffect } from 'react';
import { PostsContext, PostsActions } from '../../actions/posts.context';
import PostsCard from './PostsCard';
import GridContainer from '../Layout/GridContainer';
import Loading from '../Layout/Loading';

const Posts = (props) => {
	//get actions and state from context
	const { getUserPosts, clearUserPosts } = useContext(PostsActions);
	const { userPosts, loading } = useContext(PostsContext);

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
	
	//displays a card view using "PostsCard" for each users post.
	return (
		<>
			<Loading isLoading={loading} title="Loading Users Posts" />
			<GridContainer>
				{userPosts.map((post) => (
					<PostsCard key={post.id} id={post.id} title={post.title} body={post.body} />
				))}
			</GridContainer>
		</>
	);
};

export default Posts;
