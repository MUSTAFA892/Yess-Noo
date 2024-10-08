// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexPage from './components/IndexPage';
import YesPage from './components/YesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/yes" element={<YesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
