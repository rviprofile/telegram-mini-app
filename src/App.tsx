import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Tickets } from "./pages/Tickets";
import { Buy } from "./pages/Buy";
import { Profile } from "./pages/Profile";
import { Car } from "./pages/Car";
import { Docs } from "./pages/Docs";
import { Payment } from "./pages/Payment";
import { Refs } from "./pages/Refs";
import { AuthProvider } from "./components/AuthProvider";

const tg = window.Telegram?.WebApp;

function App() {
  useEffect(() => {
    tg?.ready();
  }, []);

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/car" element={<Car />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/refs" element={<Refs />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
