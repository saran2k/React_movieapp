import React, { useState } from 'react';
import '../App.css';  // Import CSS for styling
import background from '../Assets/Home.jpeg';  // Import the image

const Home = () => {
  const [showBlogButton, setShowBlogButton] = useState(false);  // State to toggle the blog button visibility

  const handleMovieButtonClick = () => {
    setShowBlogButton((prevState) => !prevState);  // Toggle blog button visibility
  };

  const bgStyle = {
    backgroundImage: `url(${background})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="home-container" style={bgStyle}>
      <header className="header">
        <button className="app-title-button" onClick={handleMovieButtonClick}>
          Movie Booking App
        </button>

        {/* Conditionally render Blog Button */}
        {showBlogButton && (
          <a href="http://localhost:3000/blogs" className="blog-link">
            <button className="blog-button">
              Book your favorite movies now! Your Ticket to Endless Entertainment!
            </button>
          </a>
        )}
      </header>
    </div>
  );
};

export default Home;
