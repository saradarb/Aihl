import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';
import Lobby from './components/Lobby';
import AiChat from './components/AiChat';
import Price from './components/Price/Price'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Aihl" element={<Lobby />} />
        <Route path="/Aihl/chat" element={<AiChat />} />
        <Route path="/Aihl/Price" element={<Price />} />
      </Routes>
    </Router>
  );
}

export default App;
