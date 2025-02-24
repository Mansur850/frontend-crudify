import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="header">
      <h1>Мой сайт</h1>
      <button onClick={toggleTheme}>
        {theme === "dark" ? "🌙 Тёмная" : "☀️ Светлая"}
      </button>
    </header>
  );
}

export default Header;
