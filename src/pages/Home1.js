import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import '../App.css';  // Import CSS for styling
import background from '../Assets/Home.jpeg';  // Import image from src/Assets folder

const Home1 = () => {
  const [showBlogButton, setShowBlogButton] = useState(false);  // State to toggle the blog button visibility

  const handleMovieButtonClick = () => {
    setShowBlogButton((prevState) => !prevState);  // Toggle blog button visibility
  };

  const bgStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  };

  return (
    <div className="home-container" style={bgStyle}>
      <header className="header">
        <button className="app-title-button" onClick={handleMovieButtonClick}>
          Movie Booking App
        </button>

        {/* Conditionally render Blog Button */}
        {showBlogButton && (
          <Link to="/blogs" className="blog-link">
            <button className="blog-button">
              Book your favorite movies now! Your Ticket to Endless Entertainment!
            </button>
          </Link>
        )}
      </header>
    </div>
  );
};

export default Home1;
