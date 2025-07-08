import React from 'react';
import Sidebar from '../components/Sidebar';
import './../styles.css';

const About = () => {
  return (
    <div className="main-container">
      <Sidebar />
      <div className="content about-page">
        <h2>📘 About ExcelAnalytics</h2>
        <p>
          ExcelAnalytics is a modern, intuitive data visualization platform designed for students,
          researchers, and professionals to convert Excel files into meaningful, interactive charts.
        </p>

        <div className="about-section">
          <h4>👨‍💻 Developed By:</h4>
          <p><strong>Beniel J & Esakkiammal G</strong></p>
          <p>3rd Year – Computer Science Engineering</p>
          <p>Email: <a href="mailto:benielj@gmail.com">benielj@gmail.com & esakkiammal@gmail.com</a></p>
        </div>

        <div className="about-section">
          <h4>🧰 Tech Stack:</h4>
          <ul>
            <li>Frontend: React.js + Chart.js + SheetJS</li>
            <li>Backend: Express + Node.js + MongoDB</li>
            <li>Auth: JWT + Firebase (Google Login)</li>
          </ul>
        </div>

        <div className="about-section">
          <h4>💡 Highlights:</h4>
          <ul>
            <li>Smart chart visualization</li>
            <li>Drag & drop Excel upload</li>
            <li>Live chart preview + export</li>
            <li>Dark/light mode + custom themes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
