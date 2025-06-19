import React from "react";

const ThemeToggle = ({ theme, setTheme }) => {
    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="bg-gray-300 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded-lg"
        >
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
    );
};

export default ThemeToggle;
