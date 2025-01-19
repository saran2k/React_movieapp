import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';  // Importing App.css for styling
import 'bootstrap/dist/css/bootstrap.min.css';  // Importing Bootstrap CSS

// Lazy load components for performance optimization
const Blogs = React.lazy(() => import('./pages/Blogs'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Home = React.lazy(() => import('./pages/Home'));
const NoPage = React.lazy(() => import('./pages/NoPage'));
const Layout = React.lazy(() => import('./pages/Layout'));

// Centralized Loading Component with role="output" for accessibility
const LoadingFallback = () => (
  <div className="text-center mt-5" aria-live="polite">
    <progress
      className="progress-bar progress-bar-striped progress-bar-animated"
      value={100}
      min={0}
      max={100}
      aria-valuenow={100}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      Loading...
    </progress>
    <span className="visually-hidden">Loading...</span>
  </div>
);

// App Component
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check dark mode preference from localStorage
  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    setIsDarkMode(storedDarkMode === 'enabled');
  }, []);

  // Apply the dark mode class to the body element based on the state
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'disabled');
    }
  }, [isDarkMode]);

  // Toggle function for dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <Router>
      {/* Suspense is used to handle lazy-loaded components */}
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route 
            path="/" 
            element={<Layout toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />}
          >
            {/* Default route */}
            <Route index element={<Home />} />
            {/* Other routes */}
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            {/* Fallback for unmatched routes */}
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
