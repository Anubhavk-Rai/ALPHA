import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('student');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/auth/register', { name, email, password, role });
            // Redirect to login
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="student">Student</option>
                    <option value="instructor">Instructor</option>
                </select>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
