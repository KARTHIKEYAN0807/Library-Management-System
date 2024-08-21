import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import BooksPage from './BooksPage';
import AuthorsPage from './AuthorsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<BooksPage />} />
            <Route path="/authors" element={<AuthorsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
