import { useEffect } from "react";
import "./App.css";

const tg = window.Telegram?.WebApp;

function App() {
  useEffect(() => {
    tg?.ready();
  }, []);

  return (
    <>
      <h1>VOSHOD | LOTTERY</h1>

      <p className="read-the-docs">Сайт в разработке</p>
    </>
  );
}

export default App;
