import React from 'react';
import styles from './Login.module.css';
import LoginForm from '../../components/LoginForm/LoginForm';

const Login = (props) => {
    return (
        <main>
            <h2></h2>
            <LoginForm {...props}/>
        </main>
    );
};

export default Login;