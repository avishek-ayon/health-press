import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();
    const location = useLocation();
    const uri = location.state?.from || "/home";

    const handleGetEmail = e => {
        setEmail(e.target.value);
    }
    const handleGetPassword = e => {
        setPassword(e.target.value)
    }

    const handleLogInWithEmailAndPassWord = e => {
        e.preventDefault();
        signInEmailPassword(email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                // console.log(user);
                history.push(uri);

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    const { signInUsingGoogle, signInEmailPassword } = useAuth();
    return (
        <div className="login-form col-12 m-5">
            <div>
                <h1>This is Login</h1>
                <form onSubmit={handleLogInWithEmailAndPassWord}>
                    <input onBlur={handleGetEmail} type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <br />
                    <input onBlur={handleGetPassword} type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new to ema-john website? <Link to="/register">Create Account</Link></p>
                <div>-------or----------</div>
                <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;