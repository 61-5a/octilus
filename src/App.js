import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';

import JoinWithUs from './components/pages/JoinWithUs';
import JoinSucess from './components/pages/join-sucess';

function App() {
  return (
    <div className="innerRoot">
      <Routes>
        <Route path="/" element={<JoinWithUs />} />
        <Route path="/join-sucess/" element={<JoinSucess />} />
      </Routes>
    </div>
  );
}

export default App;