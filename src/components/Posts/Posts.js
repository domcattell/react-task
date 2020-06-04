import React, { useContext, useEffect } from 'react';
import { PostsContext, PostsActions } from '../../actions/posts.context';

import PostsCard from './PostsCard';
import GridContainer from '../Layout/GridContainer';
import Loading from '../Layout/Loading';

const Posts = (props) => {
	const { getUserPosts, clearUserPosts } = useContext(PostsActions);
	const { userPosts, loadingUserPosts } = useContext(PostsContext);

	useEffect(
		() => {
			getUserPosts(props.id);

			return () => {
				clearUserPosts();
			};
		},
		[ props.id ]
	);

	return (
		<>
			{loadingUserPosts ? (
				<Loading title="Users Posts" />
			) : (
				<GridContainer>
					{userPosts.map((post) => (
						<PostsCard key={post.id} id={post.id} title={post.title} body={post.body} />
					))}
				</GridContainer>
			)}
		</>
	);
};

export default Posts;
