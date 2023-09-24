import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import backgroundImage from '../../images/das.png'; // Import the image

function GameSquare({label }) {
  const [isMounted, setIsMounted] = useState(false);
  const [iframeVisible, setIframeVisible] = useState(false);

  const handleIframeLoad = () => { //waits for the iframe to load and then render the top div
    setIsMounted(true);
  };

  const openIframe = () => { 
    setIframeVisible(true);
  };

  const closeIframe = () => {
    setIframeVisible(false);
  };

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

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 9999,
    display: iframeVisible ? 'flex' : 'none', // Center content when visible
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const iframeStyle = {
    border: 'none',
    width: '90%', // Adjust the width as needed
    height: '90vh', // Adjust the height as needed
    borderRadius: '0px 0px 10px 10px',
  };

  
  const frameTopStyle = {
   width: '90%',
   backgroundColor: 'white',
   borderRadius: '10px 10px 0px 0px'
  };

  return (
    <>
    <button
      onClick={openIframe}
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {label}
    </button>
    <div style={overlayStyle}>
        {isMounted ?
        <div style={frameTopStyle}>
        <IconButton onClick={closeIframe} style={{ color: 'red' }}>
          <CloseIcon />
        </IconButton>
        </div> :
       null}
        <iframe
          src="https://www.example.com" // Replace with the URL you want to display
          title="My Iframe"
          onLoad={handleIframeLoad}
          style={iframeStyle}
        ></iframe>
      </div>
    </>
  );
}
export default GameSquare;
