import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import IconButton from '@mui/material/IconButton';

function GameSquare({gameName, gameUrl, logoName}) {
  const [isMounted, setIsMounted] = useState(false);
  const [iframeFullscreen, setIframeFullscreen] = useState(false)
  const [iframeVisible, setIframeVisible] = useState(false);

  const handleIframeLoad = () => { //waits for the iframe to load and then render the top div
    setIsMounted(true);
  };

  const openIframe = () => { 
    setIframeVisible(true);
  };

  const closeIframe = () => {
    setIframeVisible(false);
    setIframeFullscreen(false);
  };

  const handleMouseEnter = (event) => {
    event.target.style.width = '140px'; // Set the opacity on hover
    event.target.style.opacity = '0.8';
  };

  const handleMouseLeave = (event) => {
    event.target.style.width = '133px'; // Restore the original opacity
    event.target.style.opacity = '1';
  };

  if (logoName === undefined) {
    logoName = "das.png"
    gameUrl = "https://www.example.com"
  }

  const logoUrl = "http://localhost:8000/static/game_logos/" + logoName
  const buttonStyle = {
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${logoUrl})`,
    backgroundSize: 'cover',
    border: '1px solid rgba(0, 0, 0, 0.8)',
    fontSize: '20px',
    aspectRatio: '1',
    borderRadius: '10px',
    cursor: 'pointer',
    zIndex: '6',
    width: '133px',
    transition: 'width 0.5s',
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
    width: iframeFullscreen ? '100%' : '90%', // Adjust the width as needed
    height: iframeFullscreen ? '100vh' : '90vh', // Adjust the height as needed
    borderRadius: '0px 0px 10px 10px',
    transition: 'width 0.1s',
  };

  
  const frameTopStyle = {
   width: iframeFullscreen ? '100%' : '90%',
   backgroundColor: 'white',
   borderRadius: '10px 10px 0px 0px',
   transition: 'width 0.1s',
  };

  return (
    <>
    <button
      onClick={openIframe}
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {gameName}
    </button>
    <div style={overlayStyle}>
        {isMounted ?
        <div style={frameTopStyle}>
        <IconButton onClick={closeIframe} style={{ color: 'red' }}>
          <CloseIcon />
        </IconButton>
        <IconButton onClick={() => {setIframeFullscreen(!iframeFullscreen)}}>
          <FullscreenIcon />
        </IconButton>
        </div> :
       null}
        <iframe
          src={gameUrl} // Replace with the URL you want to display
          title={gameName}
          onLoad={handleIframeLoad}
          style={iframeStyle}
        ></iframe>
      </div>
    </>
  );
}

GameSquare.defaultProps = {
    logo_name: 'das.png',
  };

export default GameSquare;
