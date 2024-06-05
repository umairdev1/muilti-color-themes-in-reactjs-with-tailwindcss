import React, { useState, useEffect } from 'react';

const ThemeSwitcher = () => {

  const [theme, setTheme] = useState('theme1');
  const themes = [
    { id: 'theme1', name: 'Tomato and Sky Blue' },
    { id: 'theme2', name: 'Gold and Lime Green' },
    { id: 'theme3', name: 'OrangeRed and DodgerBlue' },
    { id: 'theme4', name: 'BlueViolet and Aquamarine' },
    { id: 'theme5', name: 'Crimson and DarkTurquoise' },
    { id: 'theme6', name: 'HotPink and MediumOrchid' },
    { id: 'theme7', name: 'ForestGreen and DarkOrange' },
  ];

useEffect(() => {
  document.documentElement.className = theme;
}, [theme]);

const handleThemeChange = (event) => {
  setTheme(event.target.value);
};

return (
  <div className="min-h-screen text-secondary">
    <div className="p-4">
      <label htmlFor="theme-selector" className="mr-2">Select Theme:</label>
      <select
        id="theme-selector"
        value={theme}
        onChange={handleThemeChange}
        className="bg-secondary text-white p-2 rounded"
      >
        {themes.map((t) => (
          <option key={t.id} value={t.id}>
            {t.name}
          </option>
        ))}
      </select>
    </div>
    <div className="p-6">
      <h1 className="text-4xl">Hello, Umair</h1>
      <p className="mt-4">Experience dynamic color themes with this Tailwind CSS example!</p>

    </div>
  </div>
);
};

export default ThemeSwitcher;
