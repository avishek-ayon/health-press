import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useState } from "react";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const history = useHistory();
    const location = useLocation();
    const uri = location.state?.from || "/home";

    const { signInUsingGoogle, createAccountWithGoogle, updateName } = useAuth();

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleRegistration = e => {
        e.preventDefault();
        // console.log(email, password);
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }
        createAccountWithGoogle(email, password)
            .then(result => {
                const user = result.user;
                updateName(name)
                history.push(uri);
                setError("");
            })
            .catch(error => {
                setError(error.message);
            })


    }

    // google signUp
    // const handleGoogleSignUp = () => {
    //     createAccountWithGoogle(email, password)
    //         .then(result => {
    //             const user = result.user;
    //         })
    // }
    return (
        <div className="login-form">
            <div>
                <h2>Register: Create Account</h2>
                <form onSubmit={handleRegistration}>
                    <input onBlur={handleNameChange} type="name" name="" id="" placeholder="Your Name" required />
                    <br />

                    <input onBlur={handleEmailChange} type="email" name="" id="" placeholder="Your Email" required />
                    <br />
                    <input onBlur={handlePasswordChange} type="password" name="" id="" placeholder="Your Password" required />
                    <br />
                    {/* <input type="password" name="" id="" placeholder="Re-enter Password" />
                    <br /> */}
                    <div className="text-danger">{error}</div>
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div>----------or-------------</div>
                <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;