import React, { useState } from 'react';
import '../App.css';
import background from '../Assets/Contact.jpeg';  // Ensure the image exists in this path

const Contact = () => {
  // Initialize state variables
  const [isRotated, setIsRotated] = useState(false);
  const [isScaled, setIsScaled] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);  // New state for toggling contact details visibility

  // Function to handle the click event and toggle states
  const handleClick = () => {
    setIsContactVisible(prev => !prev); // Toggle contact details visibility
    setIsRotated(prev => !prev);  // Toggle rotation state
    setIsScaled(prev => !prev);   // Toggle scaling state
  };

  // Keyboard accessibility handler
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      handleClick();
    }
  };

  // Set background style for the contact container
  const bgStyle = {
    backgroundImage: `url(${background})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };

  return (
    <div className="page-container" style={bgStyle}>
      <div className="contact-container">
        {/* Button to trigger the visibility of contact details */}
        <button
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          className="custom-button"
          aria-label="Toggle contact details visibility"
        >
          {isContactVisible ? 'Hide Contact Details' : 'Click Here to Show Contact Details'}
        </button>

        {/* Display the contact details only if isContactVisible is true */}
        {isContactVisible && (
          <div
            className={`contact-details ${isRotated ? 'rotate' : ''} ${isScaled ? 'scale' : ''}`}
            style={{ backgroundColor: isScaled ? '#f0f0f0' : '#ffffff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
          >
            <p><strong>Name:</strong> Saran Kumar S</p>
            <p><strong>Phone Number:</strong> 📞 7892176793</p>
            <p><strong>Email ID:</strong> 📧 <a href="mailto:saranshekar77@gmail.com">saranshekar772@gmail.com</a></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
