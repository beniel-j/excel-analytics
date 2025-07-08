import React from 'react';
import { FaTachometerAlt, FaUpload, FaChartBar, FaUser, FaCog, FaInfoCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './../styles.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Excel Analytics</h2>
      <ul>
        <li><NavLink to="/dashboard"><FaTachometerAlt /> Dashboard</NavLink></li>
        <li><NavLink to="/upload"><FaUpload /> Upload</NavLink></li>
        <li><NavLink to="/saved"><FaChartBar /> Saved Analysis</NavLink></li>
        <li><NavLink to="/profile"><FaUser /> Profile</NavLink></li>
        <li><NavLink to="/settings"><FaCog /> Settings</NavLink></li>
        <li><NavLink to="/about"><FaInfoCircle /> About</NavLink></li>
      </ul>
    </div>
  );
};

export default Sidebar;
