import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Signup = () => {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cnfpassword, setCnfpassword] = useState('');

    const handlesubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || username === '' || password === '' || cnfpassword === '') {
            toast.warn('Please fill all the fields');
            return;
        }
        if (password !== cnfpassword) {
            toast.warn('Passwords does not match');
            return;
        }
        axios.post('/api/auth/signup', { name, email, username, password })
            .then(data => {
                console.log(data);
                navigate('/login');
            })
            .catch(err => {
                if (err.response) {
                    console.log(err.response);
                    toast.error(err.response.data.message);
                }
            })
    }

    return (
        <div className='signup' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className="formcontainer">
                <form className='signupform flex' onSubmit={handlesubmit}>
                    <div className="formgroup flex">
                        <label>
                            Name:
                        </label>
                        <input type="text" name="name" value={name} onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div className="formgroup flex">
                        <label>
                            Username:
                        </label>
                        <input type="text" name="username" value={username} onChange={(e) => { setUsername(e.target.value) }} />
                    </div>
                    <div className="formgroup flex">
                        <label>
                            Email:
                        </label>
                        <input type="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className="formgroup flex">
                        <label>
                            Password:
                        </label>
                        <input type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <div className="formgroup flex">
                        <label>
                            Confirm Password:
                        </label>
                        <input type="password" name="confirmPassword" value={cnfpassword} onChange={(e) => { setCnfpassword(e.target.value) }} />
                    </div>
                    <input type="submit" className='btn' value="Sign Up" />
                    <p>Already registered user?</p>
                    <Link to="/login">Login</Link>
                    <Link to="/">Go to Home</Link>
                </form>
            </div>
        </div>
    );
};

export default Signup;