import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import "./style.css";
import Lobby from "./components/Lobby";
import AiChat from "./components/AiChat";
import Price from "./components/Price/Price";
import Help from "./components/Help/Help";
import Settings from "./components/Settings/Settings";

function App() {
  // hi
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/Aihl" element={<Lobby />} />
        <Route path="/Aihl/chat" element={<AiChat />} />
        <Route path="/Aihl/Price" element={<Price />} />
        <Route path="/Aihl/Help" element={<Help />} />
        <Route path="/Aihl/Settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
