import React from 'react';
import LoginForm from '../components/Forms/LoginForm';
import CenteredDiv from '../components/Layout/CenteredDiv';
import Header from '../components/Layout/Header';

const Login = () => {
    return (
        <CenteredDiv>
            <Header title="Log in to continue"/>
            <LoginForm />
        </CenteredDiv>
    );
}

export default Login;
