import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../App.css'; // Import CSS for styling and animations

const Layout = ({ toggleDarkMode, isDarkMode }) => {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/blogs", label: "Blogs" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <>
      {/* Navigation Bar */}
      <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`} aria-label="Main Navigation">
        <div className="container">
          <ul className="navbar-nav ms-auto">
            {navItems.map((item) => (
              <li key={item.path} className="nav-item">
                <Link to={item.path} className="nav-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Dark Mode Toggle Button */}
          <button
            className={`btn ${isDarkMode ? 'btn-light' : 'btn-dark'} ms-3`}
            onClick={toggleDarkMode}
            aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
