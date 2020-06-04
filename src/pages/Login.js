import React from 'react';
import LoginForm from '../components/Forms/LoginForm';
import Header from '../components/Layout/Header';

const Login = (props) => {
    return (
        <>
            <Header title="Log in to continue"/>
            <LoginForm location={props.history.push}/>
        </>
    );
}

export default Login;
