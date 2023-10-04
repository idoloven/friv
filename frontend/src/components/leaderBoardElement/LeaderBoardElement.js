import React from "react";

function LeaderboardElement({player, setDisplayedProfile, setPosition, score}) {
    const apiStaticProfilePicsFolder = "http://localhost:8000/static/user_profile_pics/"
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
          zIndex: '6'
        },
        profilePicstyle:{
          borderRadius: '100%',
          aspectRatio: '1',
          width: '2%',
          backgroundImage: `url(${apiStaticProfilePicsFolder + player.profile_pic_name})`,
          backgroundSize: 'cover',
          marginRight: '5px',
          borderStyle: 'none'
        },
      }
    
    return (
      <div style={style.leaderboardElementStyle}>
          <div style={{width:'4%'}}>{player.rank}</div>
          <button style={style.profilePicstyle} onClick={(e) => {setDisplayedProfile(player.username); setPosition({ x: e.clientX, y: e.clientY })}}></button>
          <div style={{width:'17.5%'}}>{player.username}</div>
          <div style={{width:'20%'}}>{player.anaf}</div>
          <div style={{width:'20%'}}>{player.mador}</div>
          <div style={{marginLeft:'auto', marginRight:'25px'}}>{score}</div>
      </div>
    );
}
export default LeaderboardElement;
  