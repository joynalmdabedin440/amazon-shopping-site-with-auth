import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import './SignUp.css'
const SignUp = () => {

    const [error, setError] = useState(null)
    const { createUser } = useContext(AuthContext);


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;



        if (password.length < 6) {
            setError('Password should be 8 character')
            return;
        }

        if (password != confirm) {
            setError('Your password not match')
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user
                form.reset()
            })
            .catch(error => console.error(error))


    }

    return (
        <div className='form-container'>
            <h2 className='login-title'>Sign Up</h2>
            <form onSubmit={handleSubmit} >
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm ">Confirm Password</label>
                    <input type="password" name='confirm' required />
                </div>
                <input className='btn-submit' type='submit' value='Sign Up' />

            </form>
            <p className='errorMessage'>{error}</p>

            <p className='create-user'>Already have an account?<Link to='/login'>Login</Link> </p>
        </div>
    );
};

export default SignUp;