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
          borderWidth: '1px',
          borderColor: '#e7d3ed',
          borderStyle: 'solid',
        }
      }
    
    return (
        <div style={style.leaderboardElementStyle}>{player.name}

      
      
      </div>
    );
}
export default LeaderboardElement;
  