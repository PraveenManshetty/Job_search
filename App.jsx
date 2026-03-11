import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Prep from './pages/Prep';
import Companies from './pages/Companies';
import './index.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/prep" element={<Prep />} />
            <Route path="/companies" element={<Companies />} />
          </Routes>
        </main>
        
        <footer className="footer glass">
          <div className="container">
            <div className="footer-content">
              <div className="footer-logo">
                <h2 className="text-gradient">PrepX</h2>
                <p>Your ultimate career partner for placement preparation.</p>
              </div>
              <div className="footer-links">
                <div className="link-group">
                  <h4>Platform</h4>
                  <a href="/jobs">Jobs</a>
                  <a href="/prep">Prep</a>
                  <a href="/companies">Companies</a>
                </div>
                <div className="link-group">
                  <h4>Support</h4>
                  <a href="#help">Help Center</a>
                  <a href="#privacy">Privacy</a>
                  <a href="#terms">Terms</a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2026 PrepX. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
