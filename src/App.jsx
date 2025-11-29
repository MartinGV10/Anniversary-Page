import { Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";
import Home from "./Home";
import "./css/App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
