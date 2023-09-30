import React, { useState, useEffect } from 'react';
import { useOutletContext } from "react-router-dom";
import LeaderboardElement from "../../components/leaderBoardElement/LeaderBoardElement";
import ProfileSquare from "../../components/profileSquare/ProfileSquare";

export default function LeaderBoard() {
  const [games,] = useOutletContext();
  const [currentGame, setCurrentGame] = useState("chess");
  const [displayedProfile, setDisplayedProfile] = useState('none');
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const MinuteInMiliSeconds = 60000
  const LeaderboardApiUrl = "http://localhost:8000/api/leaderboard/?game="
  
  const [leaderboard, setLeaderboard] = useState([]);
  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
      const response = await fetch(LeaderboardApiUrl + currentGame);
      const data = await response.json();
      const leaderboardWithRank = data.map((player, index) => ({
        ...player,
        rank: index + 1
    }));
    setLeaderboard(leaderboardWithRank);
} catch (error) {
    // Handle errors if any
    console.error('Error fetching leaderboard data: ', error);
}
    };
    fetchLeaderboard();
    const interval = setInterval(fetchLeaderboard, MinuteInMiliSeconds);
    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [currentGame]);
  
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
 
  return (
    <div style = {style.window}>
      <div style = {style.gamesBar}>
      {games.map((game) => 
       <React.Fragment key={game.game_name}>
        <button 
        style={game.game_name === currentGame ? style.selectedGameTab : style.gameTab}
        onClick={() => {setCurrentGame(game.game_name); setDisplayedProfile('none')}}
        >{game.game_name}</button>
        </React.Fragment>
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
        {leaderboard ? leaderboard.map((player) => 
          <React.Fragment key={player.username}>
            <ProfileSquare player={player} displayedProfile={displayedProfile} position={position} ></ProfileSquare>
            <LeaderboardElement player={player} setDisplayedProfile={setDisplayedProfile} setPosition={setPosition} score={player.scores[currentGame]}></LeaderboardElement>
          </React.Fragment>
        ) : null}
        
      </div>
    </div>
  );
}