import React, {useContext, useEffect} from 'react';
import {PostsActions, PostsContext} from '../actions/posts.context';
import PostsCard from '../components/Posts/PostsCard';

const Index = () => {
    //grabs what's needed from the global state. in this case, the posts state
    //and getUsers action are needed.
    const {posts} = useContext(PostsContext);
    const {getPosts} = useContext(PostsActions);

    // calls the getUsers function from global state
    useEffect(() => {
        getPosts();
    }, [])

    console.log(posts);
    return (
        <div style={{"display": "flex", "justifyContent": "center", "marginBottom": "50px", "flexDirection": "column", "alignContent": "center"}}>
            {posts.map(post => (
                <PostsCard title={post.title} body={post.body}/>
            ))}
        </div>
    );
}

export default Index;
