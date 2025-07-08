 import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import './../styles.css';

const translations = {
  en: {
    title: '⚙️ Settings',
    darkMode: 'Enable Dark Mode',
    notifications: 'Enable Notifications',
    accentColor: 'Accent Color',
    language: 'Language',
    save: '💾 Save Settings'
  },
  fr: {
    title: '⚙️ Paramètres',
    darkMode: 'Activer le mode sombre',
    notifications: 'Activer les notifications',
    accentColor: "Couleur d'accent",
    language: 'Langue',
    save: '💾 Enregistrer'
  },
  hi: {
    title: '⚙️ सेटिंग्स',
    darkMode: 'डार्क मोड सक्षम करें',
    notifications: 'सूचनाएं सक्षम करें',
    accentColor: 'एक्सेंट रंग',
    language: 'भाषा',
    save: '💾 सहेजें'
  },
  ta: {
    title: '⚙️ அமைப்புகள்',
    darkMode: 'இருள் பயன்முறை இயக்கவும்',
    notifications: 'அறிவிப்புகளை இயக்கவும்',
    accentColor: 'அச்சு நிறம்',
    language: 'மொழி',
    save: '💾 சேமிக்கவும்'
  }
};

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [accentColor, setAccentColor] = useState('#3282B8');
  const [language, setLanguage] = useState('en');

  const t = translations[language];

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const storedNotify = localStorage.getItem('notifications');
    const storedColor = localStorage.getItem('accentColor');
    const storedLang = localStorage.getItem('language');

    if (storedTheme === 'dark') setDarkMode(true);
    if (storedNotify === 'false') setNotifications(false);
    if (storedColor) {
      setAccentColor(storedColor);
      document.documentElement.style.setProperty('--accent-color', storedColor);
    }
    if (storedLang) setLanguage(storedLang);

    if (storedTheme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, []);

  const saveSettings = () => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('notifications', notifications);
    localStorage.setItem('accentColor', accentColor);
    localStorage.setItem('language', language);

    document.documentElement.style.setProperty('--accent-color', accentColor);

    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }

    alert('✅ Settings saved!');
  };

  return (
    <div className="main-container">
      <Sidebar />
      <div className="content settings">
        <h2>{t.title}</h2>

        <div className="settings-section">
          <div className="setting-row">
            <span>{t.darkMode}</span>
            <label className="switch">
              <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
              <span className="slider round"></span>
            </label>
          </div>

          <div className="setting-row">
            <span>{t.notifications}</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
              />
              <span className="slider round"></span>
            </label>
          </div>

          <div className="setting-row">
            <span>{t.accentColor}</span>
            <input
              type="color"
              value={accentColor}
              onChange={(e) => {
                setAccentColor(e.target.value);
                document.documentElement.style.setProperty('--accent-color', e.target.value);
              }}
            />
          </div>

          <div className="setting-row">
            <span>{t.language}</span>
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="hi">हिन्दी</option>
              <option value="ta">தமிழ்</option>
            </select>
          </div>

          <button className="save-btn" onClick={saveSettings}>
            {t.save}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
