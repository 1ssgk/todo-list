import React from "react";
import { useDarkMode } from "../../context/DarkModeContext";
import styles from "./Header.module.css";
import { HiMoon, HiSun } from "react-icons/hi";

export default function Header({ filters, filter, onFilterChange }) {
  const {darkMode , toggleDarkMode} = useDarkMode();
  
  const handleButtonClick = (filter) => {
    onFilterChange(filter);
  };

  const handleDarkModeButtonClick = () => {
    toggleDarkMode();
  };

  return (
    <header className={styles.header}>
      <button className={styles.toggle} onClick={handleDarkModeButtonClick}>
        {!darkMode && <HiMoon />}
        {darkMode && <HiSun />}
      </button>

      <ul className={styles.filters}>
        {filters &&
          filters.map((value, index) => (
            <li key={index}>
              <button
                className={`${styles.filter} ${
                  filter === value && styles.selected
                }`}
                onClick={() => handleButtonClick(value)}
              >
                {value}
              </button>
            </li>
          ))}
      </ul>
    </header>
  );
}
