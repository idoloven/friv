import React from 'react';
import logo from '../../images/friv_logo.png'; // Import the image
import GameSquare from '../../components/gameSquare/GameSquare';

export default function Home() {
  const logoStyle = {
    backgroundImage: `url(${logo})`,
    backgroundSize: 'cover',
    width: '425px',
    gridColumnStart: '3',
    gridColumnEnd: '6',
    gridRowStart: '2',
    gridRowEnd: '2',
    borderRadius: '10px',
    Zindex: '6',
  }

  const fillerStyle = {
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'transparent',
    width: '133px',
    aspectRatio: '1',
  }

  let numberOfGames = 6
  const normalGridSize = 18
  const apps = [{ "name": "asd" },{ "name": "asd" },{ "name": "asd" }]
  return (
    <>
     {apps.map((app) => 
        <div style = {fillerStyle}>{app["name"]}</div>
      )
        }
      <GameSquare label='das'></GameSquare>
      <div style={logoStyle}></div>
      <GameSquare label='1'></GameSquare>
      <GameSquare label='2'></GameSquare>
      <GameSquare label='3'></GameSquare>
      <GameSquare label='4'></GameSquare>
      <GameSquare label='5'></GameSquare>
      <GameSquare label='6'></GameSquare>
      <GameSquare label='7'></GameSquare>
      <GameSquare label='8'></GameSquare>
      <GameSquare label='9'></GameSquare>
      <GameSquare label='10'></GameSquare>
      <GameSquare label='11'></GameSquare>
    </>
  );
}
