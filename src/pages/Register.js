import React from 'react';
import Header from '../components/Layout/Header';
import RegisterForm from '../components/Forms/RegisterForm';

const Register = () => {
    return (
        <div>
            <Header title="Create A New Account" />
            <RegisterForm />
        </div>
    );
}

export default Register;
