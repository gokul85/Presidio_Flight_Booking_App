import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handlesubmit = (e) => {
        e.preventDefault();
        if (username === '' || password === '') {
            toast.warn('Please fill all the fields');
            return;
        }
        axios.post('/api/auth/login', { username, password })
            .then(data => {
                localStorage.setItem('token', data.data.token);
                localStorage.setItem('role', data.data.role);
                toast.success('Successfully logged in');
                if (data.data.role === 'admin') {
                    navigate('/admin');
                }
                else {
                    navigate('/');
                }

            })
            .catch(err => {
                if (err.response) {
                    console.log(err.response.data.message);
                    toast.error(err.response.data.message);
                }
            })
    }

    return (
        <div className='login' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className="formcontainer">
                <form className='loginform flex' onSubmit={handlesubmit}>
                    <div className="formgroup flex">
                        <label>
                            Username / Email:
                        </label>
                        <input type="text" name="username" value={username} onChange={(e) => { setUsername(e.target.value) }} />
                    </div>
                    <div className="formgroup flex">
                        <label>
                            Password:
                        </label>
                        <input type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <input type="submit" className='btn' value="Login" />
                    <p>New user?</p>
                    <Link to="/signup">Register</Link>
                    <Link to="/">Go to Home</Link>
                </form>
            </div>
        </div>
    );
};

export default Login;