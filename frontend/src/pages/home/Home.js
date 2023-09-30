import React from "react";
import { useOutletContext } from "react-router-dom";
import logo from '../../images/friv_logo.png'; // Import the image
import GameSquare from '../../components/gameSquare/GameSquare';

export default function Home() {
  const [games,] = useOutletContext();
  const style = {
    window:{
      flex: '1',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoStyle:{
      backgroundImage: `url(${logo})`,
      backgroundSize: 'cover',
      width: '425px',
      gridColumnStart: '3',
      gridColumnEnd: '6',
      gridRowStart: '2',
      gridRowEnd: '2',
      borderRadius: '10px',
      Zindex: '6',
    },
    gridStyle:{
      display: 'grid',
      gridTemplateColumns: 'auto auto auto auto auto auto auto',
      gap: '10px',
    }
  }

  // fill the rest of the grid with dasses
  let numberOfGames = games.length
  const normalGridSize = 18
  let numberOfDas = normalGridSize - numberOfGames
  let fillers = []
  for (let i = 0; i < numberOfDas; i++){
    fillers.push(<React.Fragment key={i}><GameSquare></GameSquare></React.Fragment>)
  }
  return (
    <div style={style.window}>
      <div style={style.gridStyle}>
      {games.map((game) => 
        <React.Fragment key={game["game_name"]}>
          <GameSquare gameName={game["game_name"]} gameUrl = {game["game_url"]} logoName = {game["logo_name"]}></GameSquare>
        </React.Fragment>
        )
          }
        <div style={style.logoStyle}></div>
        {fillers}
      </div>
    </div>
  );
}
