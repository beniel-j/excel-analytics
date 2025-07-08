import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { auth, provider, signInWithPopup } from '../firebase';
import './../styles.css';

function Login({ setToken }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        username,
        password,
      });
      const token = res.data.token;
      setToken(token);
      localStorage.setItem('token', token);
      alert("✅ Logged in!");
      navigate('/dashboard');
    } catch (err) {
      alert("❌ Login failed. Please check your credentials.");
    }
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const token = user.accessToken;

        localStorage.setItem('token', token);
        localStorage.setItem('name', user.displayName);
        localStorage.setItem('email', user.email);

        alert(`✅ Logged in as ${user.displayName}`);
        navigate('/dashboard');
      })
      .catch((error) => {
        console.error("Google Sign-in Error:", error);
        alert("❌ Google Sign-in failed");
      });
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>🔐 Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>

        <div className="google-divider">
          <span>or</span>
        </div>

        <button className="google-btn" onClick={handleGoogleLogin}>
          <FaGoogle style={{ marginRight: '10px' }} />
          Continue with Google
        </button>

        <p className="redirect-link">
          New here? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
