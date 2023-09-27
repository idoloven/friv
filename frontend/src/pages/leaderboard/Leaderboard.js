import React, { useState } from "react";
import LeaderboardElement from "../../components/leaderBoardElement/LeaderBoardElement"; 

export default function LeaderBoard() {
  const [game, setGame] = useState([]);
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
      paddingRight: '20px',
      display: 'flex',
      cursor: 'pointer',
      borderStyle: 'none',
      fontSize: '20px'
    }
  }

  
  const players1 = [{'name':'catom1', 'anaf':'berashit', 'mador':'37', 'score':111}, {'name':'denis1', 'anaf':'berashit', 'mador':'13', 'score':333}, {'name1':'dp', 'anaf':'almog', 'mador':'20', 'score':222}]
  const players = [{'name':'catom', 'anaf':'berashit', 'mador':'37', 'score':111}, {'name':'denis', 'anaf':'berashit', 'mador':'13', 'score':333}, {'name':'dp', 'anaf':'almog', 'mador':'20', 'score':222}]
  function compareScores(playerA, playerB) {
    return playerA["score"] - playerB["score"];
  }
  players.sort(compareScores);
  players.forEach(function (player, index) {
    player.rank = index + 1
  })
  
  const games = ["chess", "icy tower", "monkeytype", "rocket league", "cuphead"]

  return (
    <div style = {style.window}>
      <div style = {style.gamesBar}>
      {games.map((game) => 
        <button style={style.gameTab}>{game}</button>
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
        {players.map((player) => 
            <LeaderboardElement player={player}></LeaderboardElement>
        )}
        
      </div>
    </div>
  );
}