import React, { useState } from "react";
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate, Link, Outlet } from 'react-router-dom';

async function loginUser(credentials) {
    return axios.post('http://localhost:3001/login', credentials)
        .then(response => response.data)
        .catch(error => {
            console.error('There was an error!', error);
        });
}

function Login() {
    const [formData, setFormData] = useState({
        // username: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = formData;
        const token = await loginUser({
            email,
            password
        });

        if (token) {
            swal("Good job!", "Login Successful!", "success");
            navigate('/home');
        }
        else {
            swal("Error!", "Login Failed!", "error");
        }
    }

    return(
        <div className= "login">
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>

                <label>
                    Password:
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                </label>

                <input type="submit" value="Login" />
                <p>Don't Have a account? <Link to="/register">Register</Link></p>            
            </form>
        </div>
    );
}

export default Login;