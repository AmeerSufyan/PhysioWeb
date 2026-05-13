import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}