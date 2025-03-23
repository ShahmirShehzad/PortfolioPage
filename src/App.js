import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import DataEntry from "./pages/DataEntry";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  const lightBg = "#fff8f5";
  const darkBg = "#4f2b1936";

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div style={{ background: theme === "light" ? lightBg : darkBg }}>
      <NavBar theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<DataEntry theme={theme} />} />
        <Route path="/home" element={<HomePage theme={theme} />} />
      </Routes>
    </div>
  );
}

export default App;
