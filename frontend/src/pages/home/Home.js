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
  const logoStyle = {
    // justifyItems: 'center',
    // alignItems: 'center',
    gridColumn: '3',
    gridRow: '3',
    display: 'flex',
    // aspectRatio: '1',
  }
  const homeStyle = {
    aspectRatio: '1',
    //paddingTop: '100%',
  }

  let numberOfGames = 6
  const gridSize = 25
  const apps = [{ "name": "asd" },{ "name": "asd" },{ "name": "asd" },{ "name": "asd" },{ "name": "asd" },{ "name": "asd" },{ "name": "asd" },{ "name": "asd" },{ "name": "asd" },{ "name": "asd" },{ "name": "asd" },{ "name": "asd" },{ "name": "asd" },{ "name": "asd" },{ "name": "asd" },{ "name": "asd" }, { "name": "asdasd" }]
  return (
    <>
      {/* <button style={buttonStyle} onClick={() => alert('Button clicked')}></button> */}
      <div style={logoStyle}>Gen Games</div>
      <div style={homeStyle}>hi1</div>
      <div style={homeStyle}>hi2</div>
      <div style={homeStyle}>hi3</div>
      <div style={homeStyle}>hi4</div>
      <div style={homeStyle}>hi5</div>
      <div style={homeStyle}>hi6</div>
      {/* {apps.map((app) => 
        <div>{app["name"]}</div>
      )
        } */}

    </>
  );
}
