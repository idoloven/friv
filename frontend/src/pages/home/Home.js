import React from 'react';
import backgroundImage from '../../images/das.png'; // Import the image

export default function Home() {
  const buttonStyle = {
    background: `url(${backgroundImage}) no-repeat center center`,
    backgroundSize: 'contain',
    width: '200px', // Set the width and height as needed
    height: '200px',
    border: 'none',
    cursor: 'pointer',
  };
  return (
      <div>
        <button style={buttonStyle} onClick={() => alert('Button clicked')}></button>
    </div>
  );
}
