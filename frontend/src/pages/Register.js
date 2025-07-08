import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './../styles.css';

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user'
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      return alert('❌ Passwords do not match');
    }

    try {
      await axios.post('http://localhost:5000/api/auth/register', {
        username: form.username,
        password: form.password,
        role: form.role,
        name: form.name,
        email: form.email
      });
      alert("✅ Registered successfully!");
      navigate('/');
    } catch (err) {
      alert("❌ Registration failed. Try a different username.");
    }
  };

  return (
    <div className="container">
      <h2>📝 Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} />
        <input type="text" name="username" placeholder="Username" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
        <button type="submit">Register</button>
        <p>Already registered? <a href="/">Login</a></p>
      </form>
    </div>
  );
}

export default Register;
