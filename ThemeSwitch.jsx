import React, { createContext, useContext, useState, useEffect } from "react";
import { ConfigProvider, Switch } from "antd";
import "./light-theme.css"; // Світла тема за замовчуванням

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    const body = document.body;

    if (darkMode) {
      body.classList.add("dark-mode");
      console.log("Dark theme activated");
    } else {
      body.classList.remove("dark-mode");
      console.log("Light theme activated");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <ConfigProvider
        theme={{ token: { colorPrimary: darkMode ? "#1d1d1d" : "#1890ff" } }}
      >
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

const ThemeSwitcher = () => {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <Switch
      checked={darkMode}
      onChange={toggleTheme}
      checkedChildren="Dark"
      unCheckedChildren="Light"
    />
  );
};

export { ThemeProvider, ThemeSwitcher };
