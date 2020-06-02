import React, { useContext, useEffect } from 'react';
import { PostsActions, PostsContext } from '../actions/posts.context';
import { UsersActions, UsersContext } from '../actions/users.context';
import PostsCard from '../components/Posts/PostsCard';
import Header from '../components/Layout/Header';
import GridContainer from '../components/Layout/GridContainer';

const UserPosts = (props) => {
	const { getUserPosts } = useContext(PostsActions);
	const { userPosts } = useContext(PostsContext);
	const { getCurrentUser } = useContext(UsersActions);
	const { currentUser } = useContext(UsersContext);

	useEffect(() => {
        getUserPosts(props.match.params.id);
        getCurrentUser(props.match.params.id)
	},[]);

	return (
		<div>
			<Header title={`POSTS FOR ${currentUser.username}`} />
			<GridContainer>{userPosts.map((post) => <PostsCard key={post.id} id={post.id} title={post.title} body={post.body} />)}</GridContainer>
		</div>
	);
};

export default UserPosts;
