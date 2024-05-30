import React, { useState } from "react";
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate, Link, Outlet } from 'react-router-dom';

async function registerUser(credentials) {
    return axios.post('http://localhost:3001/register', credentials)
        .then(response => response.data)
        .catch(error => {
            console.error('There was an error!', error);
        });
}

function Register() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = formData;
        const token = await registerUser({
            email,
            password
        });

        if (token) {
            swal("Good job!", "Registered Successful!", "success");
            navigate('/login');
        }
        else {
            swal("Error!", "Register Failed!", "error");
        }
    }

    return(
        <div className= "register">
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>

                <label>
                    Password:
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                </label>

                <input type="submit" value="Register" />

                <p>Already have an account? <Link to="/login">Log In</Link></p>            
            </form>
        </div>
    );
}

export default Register;