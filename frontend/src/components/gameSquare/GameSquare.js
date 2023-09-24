import React, { useState } from 'react';
import backgroundImage from '../../images/das.png'; // Import the image

function GameSquare({label }) {
  const handleMouseEnter = (event) => {
    event.target.style.width = '140px'; // Set the opacity on hover
    event.target.style.opacity = '0.8';
  };

  const handleMouseLeave = (event) => {
    event.target.style.width = '133px'; // Restore the original opacity
    event.target.style.opacity = '1';
  };

  const buttonStyle = {
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    border: '1px solid rgba(0, 0, 0, 0.8)',
    fontSize: '30px',
    aspectRatio: '1',
    borderRadius: '10px',
    cursor: 'pointer',
    zIndex: '6',
    width: '133px',
    transition: 'width 0.5s', // Add opacity transition
  }



  return (
    <button
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {label}
    </button>
  );
}

export default GameSquare;
