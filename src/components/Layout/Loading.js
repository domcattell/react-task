import React from 'react';
import ReactLoading from 'react-loading';

//simple loading animation using react-loading package that can be used across the app
//quickly added inline styles instead of creating another stylesheet
const Loading = (props) => {
    return (
        <div style={{"display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "padding": "1.5em"}}>
            <p>{props.title}</p>
            <ReactLoading type="bars" color="gray" height="5%" width="5%" />
        </div>
    );
}

export default Loading;
