import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Upload from './pages/Upload';
import Saved from './pages/Saved';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    setToken(localStorage.getItem('token') || '');
  }, []);

  return (
    <Router>
      <Routes>

        {/* Default: If token exists, go to dashboard; else login */}
        <Route
          path="/"
          element={
            token ? <Navigate to="/login" /> : <Login setToken={setToken} />
          }
        />

        {/* Auth Pages */}
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            token ? <Dashboard /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/upload"
          element={
            token ? <Upload /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/saved"
          element={
            token ? <Saved /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/profile"
          element={
            token ? <Profile /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/settings"
          element={
            token ? <Settings /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/about"
          element={
            token ? <About /> : <Navigate to="/login" replace />
          }
        />

      </Routes>
    </Router>
  );
}

export default App;
