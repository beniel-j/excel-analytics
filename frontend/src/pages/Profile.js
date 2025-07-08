import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import './../styles.css';

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    const savedName = localStorage.getItem('name') || 'Beniel J';
    const savedEmail = localStorage.getItem('email') || 'youremail@example.com';
    const savedRole = localStorage.getItem('role') || 'Data Analyst';

    setName(savedName);
    setEmail(savedEmail);
    setRole(savedRole);
  }, []);

  return (
    <div className="main-container">
      <Sidebar />
      <div className="content profile">
        <h2>👤 Profile</h2>

        <div className="profile-card">
          <img
            src="https://api.dicebear.com/7.x/thumbs/svg?seed=Beniel"
            alt="Profile"
            className="profile-pic"
          />

          <div className="profile-info">
            <label>Full Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} />

            <label>Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />

            <label>Role</label>
            <input value={role} onChange={(e) => setRole(e.target.value)} />

            <label>Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Tell us something about you..."
            ></textarea>

            <button className="primary-btn">Update Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
