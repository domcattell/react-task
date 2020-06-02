import React from 'react';
import CenteredDiv from '../components/Layout/CenteredDiv';
import PostContent from '../components/Posts/PostContent';
import Comments from '../components/Comments/Comments';
import CardContainer from '../components/Layout/CardContainer';

const Post = (props) => {
	return (
		<CenteredDiv>
			<CardContainer>
				<PostContent id={props.match.params.id} />
				<Comments id={props.match.params.id} />
			</CardContainer>
		</CenteredDiv>
	);
};

export default Post;
