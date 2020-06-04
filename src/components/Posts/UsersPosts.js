import React, {useContext, useEffect} from 'react';
import { PostsActions, PostsContext } from '../../actions/posts.context';
import { UsersActions, UsersContext } from '../../actions/users.context';
import PostsCard from '../Posts/PostsCard';
import Loading from '../Layout/Loading';

const UsersPosts = () => {
    const { getUsersPosts, clearUsersPosts } = useContext(PostsActions);
	const { usersPosts, postLoading } = useContext(PostsContext);
	const { getCurrentUser } = useContext(UsersActions);
	const { currentUser } = useContext(UsersContext);

    useEffect(() => {
        getUsersPosts(props.match.params.id);
        getCurrentUser(props.match.params.id)

        return () => {
            clearUsersPosts()
        }
    },[]);
    
    return (
        <>
        <div>
        {postLoading ? <Loading title="Users Posts"/> :
        usersPosts.map((post) => (
             <PostsCard key={post.id} id={post.id} title={post.title} body={post.body} />
        ))
        }
        </div>
        </>
       
    );
}

export default UsersPosts;
