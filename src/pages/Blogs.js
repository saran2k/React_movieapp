import React, { useState } from 'react';
import '../App.css';  // Import CSS for additional styling
import MovieList from '../components/MovieList';  // Import MovieList component
import background from '../Assets/Ticketbooking.jpeg';

const Blog = () => {
  const [showLanguages, setShowLanguages] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [rotate, setRotate] = useState(false);

  const languages = ['English', 'French', 'Hindi', 'Spanish', 'Tamil', 'Telugu'];
  
  // Define genres for each language (this could be based on the actual movie data)
  const languageGenres = {
    English: ['Action', 'Comedy', 'Romance', 'Thriller'],
    French: ['Drama', 'Comedy', 'Romance'],
    Hindi: ['Action', 'Comedy', 'Romance', 'Thriller'],
    Spanish: ['Action', 'Comedy', 'Romance'],
    Tamil: ['Action', 'Drama', 'Romance'],
    Telugu: ['Action', 'Thriller', 'Drama'],
  };

  // Welcome button toggle (show/hide languages and reset selections)
  const handleWelcomeClick = () => {
    setShowLanguages(!showLanguages);
    if (showLanguages) {
      setSelectedLanguage('');
      setSelectedGenre('');
    }
    setRotate(true);
    setTimeout(() => setRotate(false), 800);  // Reset animation
  };

  // Language selection
  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setSelectedGenre(''); // Reset genre selection when a new language is chosen
  };

  // Genre selection
  const handleGenreSelect = (e) => {
    setSelectedGenre(e.target.value);
  };

  // Inline style for background image
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
    <div style={bgStyle}>  {/* Apply the background style directly here */}
      {/* Step 1: Welcome Button */}
      <button
        className={`welcome-to-movie-hub ${rotate ? 'rotate' : ''}`}
        onClick={handleWelcomeClick}
        style={{ fontSize: '2rem', cursor: 'pointer' }}
      >
        "Lights. Camera. Book!"
      </button>

      {/* Step 2: Language Selection - Show/Hide based on welcome button */}
      {showLanguages && (
        <div className="language-selection">
          {languages.map((language) => (
            <button
              key={language}
              onClick={() => handleLanguageSelect(language)}
              className={`language-button ${selectedLanguage === language ? 'selected' : ''}`}
            >
              {language}
            </button>
          ))}
        </div>
      )}

      {/* Step 3: Genre Dropdown - Appears after language selection */}
      {selectedLanguage && (
        <div className="genre-selection">
          <h3>{selectedLanguage} Movies</h3>
          <select onChange={handleGenreSelect} value={selectedGenre}>
            <option value="">Select Genre</option>
            {languageGenres[selectedLanguage].map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Step 4: Display Filtered Movies based on selected language and genre */}
      {selectedLanguage && selectedGenre && (
        <div className="movie-list">
          <MovieList language={selectedLanguage} genre={selectedGenre} />
        </div>
      )}
    </div>
  );
};

export default Blog;
