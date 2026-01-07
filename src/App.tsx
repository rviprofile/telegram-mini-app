import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Tickets } from "./pages/Tickets";
import { Buy } from "./pages/Buy";
import { Profile } from "./pages/Profile";

const tg = window.Telegram?.WebApp;

function App() {
  useEffect(() => {
    tg?.ready();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
