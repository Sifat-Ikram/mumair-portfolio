import { useEffect, useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Load theme from localStorage
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  // Apply the theme change and update localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="relative w-16 h-8 flex items-center dark:bg-dark bg-[#FD6F00] cursor-pointer rounded-full p-1"
      onClick={() => setDarkMode(!darkMode)}
    >
      {/* Moon Icon */}
      <FaMoon className="text-white" size={18} />

      {/* Toggle Button */}
      <div
        className={`absolute w-6 h-6 bg-white dark:bg-medium rounded-full shadow-md transform transition-transform duration-300 ${
          darkMode ? "translate-x-8" : "translate-x-0"
        }`}
      ></div>

      {/* Sun Icon */}
      <BsSunFill className="ml-auto dark:text-white" />
    </div>
  );
};

export default DarkModeButton;
