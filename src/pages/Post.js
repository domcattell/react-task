import React from 'react';
import CenteredDiv from '../components/Layout/CenteredDiv';
import PostContent from '../components/Posts/PostContent';
import Comments from '../components/Comments/Comments';
import CardContainer from '../components/Layout/CardContainer';

//renders PostContent and Comments component for a post
const Post = (props) => {
	const {id} = props.match.params
	return (
		<CenteredDiv>
			<CardContainer>
				<PostContent id={id} />
				<Comments id={id} />
			</CardContainer>
		</CenteredDiv>
	);
};

export default Post;
