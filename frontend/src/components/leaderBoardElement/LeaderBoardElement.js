import { AspectRatio } from '@mui/icons-material';
import React from 'react';

function LeaderboardElement({player}) {
    const style = {
        leaderboardElementStyle:{
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: 'white',
          borderRadius: '25px',
          display: 'flex',
          width: '100%',
          fontSize: '16px',
          margin: '5px',
          padding: '10px',
          paddingLeft: '20px',
          borderWidth: '1px',
          borderColor: '#e7d3ed',
          borderStyle: 'solid',
        },
        profilePicstyle:{
          borderRadius: '10px',
          aspectRatio: '1',
          width: '2%',
          backgroundImage: `url(${"http://localhost:8000/static/das.png"})`,
          backgroundSize: 'cover',
          marginRight: '5px',
          borderStyle: 'none'
        }
      }
    
    return (
      <div style={style.leaderboardElementStyle}>
          <div style={{width:'4%'}}>{player.rank}</div>
          <button style={style.profilePicstyle}></button>
          <div style={{width:'17.5%'}}>{player.name}</div>
          <div style={{width:'20%'}}>{player.anaf}</div>
          <div style={{width:'20%'}}>{player.mador}</div>
          <div style={{marginLeft:'auto', marginRight:'25px'}}>{player.score}</div>
      </div>
    );
}
export default LeaderboardElement;
  