import React, { useState, useEffect } from 'react';
import LeaderboardElement from "../../components/leaderBoardElement/LeaderBoardElement";
import ProfileSquare from "../../components/profileSquare/ProfileSquare";

export default function LeaderBoard() {
  const [currentGame, setCurrentGame] = useState("chess");
  const [displayedProfile, setDisplayedProfile] = useState('none');
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  // Check if the click target is not a button
  const handleClick = (e) => {
    if (e.target.tagName !== 'BUTTON') {
      setDisplayedProfile('none');
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      // Remove the event listeners when the component unmounts
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const style = {
    titels: {
      color: 'white',
      display: 'flex',
      paddingLeft: '25px',
    },
    listStyle: {
      display:'flex',
      flexDirection: 'column',
      width: '85%',
      paddingTop: '30px',
      paddingRight: '5vw',
    },
    window:{
      fontFamily: 'Copperplate',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
    gamesBar:{
      display:'flex',
      backgroundColor: 'rgba(255,255,255,0.9)',
      width: '83%',
      paddingRight: '5vw',
      borderColor: '#e7d3ed',
      borderStyle: 'solid',
      marginTop: '5vh',
    },
    gameTab:{
      color: 'black',
      width: 'fit-content',
      paddingRight: '10px',
      paddingLeft: '10px',
      display: 'flex',
      cursor: 'pointer',
      borderStyle: 'none',
      fontSize: '20px',
      justifyContent: 'center',
    },
    selectedGameTab:{
      backgroundColor: '#e7d3ed', 
      color: 'black',
      width: 'fit-content',
      paddingRight: '10px',
      paddingLeft: '10px',
      display: 'flex',
      justifyContent: 'center',
      cursor: 'pointer',
      borderStyle: 'none',
      fontSize: '20px'
    },
  }

  // receive from back
  const players1 = [{'name':'catom1', 'anaf':'berashit', 'mador':'37', 'score':111}, {'name':'denis1', 'anaf':'berashit', 'mador':'13', 'score':333}, {'name':'dp1', 'anaf':'almog', 'mador':'20', 'score':222}]
  const players = [{'name':'catom', 'anaf':'berashit', 'mador':'37', 'score':111}, {'name':'denis', 'anaf':'berashit', 'mador':'13', 'score':333}, {'name':'dp', 'anaf':'almog', 'mador':'20', 'score':222}]
  function compareScores(playerA, playerB) {
    return playerA["score"] - playerB["score"];
  }
  players.sort(compareScores);
  players.forEach(function (player, index) {
    player.rank = index + 1
  })
  
  const gamesMap = {"chess": players, "icy tower": players1, "monkeytype": players1, "rocket league": players, "cuphead": players}
  const games = ["chess", "icy tower", "monkeytype", "rocket league", "cuphead"]
  return (
    <div style = {style.window}>
      <div style = {style.gamesBar}>
      {games.map((game) => 
        <button 
        style={game === currentGame ? style.selectedGameTab : style.gameTab}
        onClick={() => {setCurrentGame(game)}}
        >{game}</button>
        )
          }
      </div>
      <div style={style.listStyle}>
        <div style={style.titels}>
          <div style={{width:'6.5%'}}>#</div>
          <div style={{width:'18%'}}>Name</div>
          <div style={{width:'19.5%'}}>Anaf</div>
          <div style={{width:'20%'}}>Mador</div>
          <div style={{marginLeft:'auto'}}>Score</div>
        </div>
        {gamesMap[currentGame] ? gamesMap[currentGame].map((player) => 
          <>
            <ProfileSquare player={player} displayedProfile={displayedProfile} position={position} ></ProfileSquare>
            <LeaderboardElement player={player} setDisplayedProfile={setDisplayedProfile} setPosition={setPosition}></LeaderboardElement>
          </>
        ) : null}
        
      </div>
    </div>
  );
}