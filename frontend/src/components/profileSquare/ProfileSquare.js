import React from "react";

function ProfileSquare({player, displayedProfile, position}) {

    const style = {
        profileStyle:{
            backgroundColor: 'black',
            display: player.name === displayedProfile ? 'flex' : 'none',
            zIndex: '100',
            width: '25vw',
            aspectRatio: '1',
            position: 'fixed',
            left: `${position.x + 30}px`,
            top: `${position.y}px`,
            flexDirection: 'column',
            color: 'white',
            borderRadius: '10px',
            borderStyle: 'solid',
            borderColor: '#a4edca',
          },
          mediumProfileImageStyle: {
            borderRadius: '100%',
            width: '40%',
            height: '40%',
            marginTop: '10px',
            marginBottom: '10px',
            marginRight: 'auto',
            marginLeft: 'auto',
            backgroundImage: `url(${"http://localhost:8000/static/das.png"})`,
            backgroundSize: 'cover',
            borderStyle: 'solid',
            borderColor: 'white',
          }
      }
    
    return (
      <div style={style.profileStyle}>
          <div style={style.mediumProfileImageStyle}></div>
          <div>{player.name}</div>
      </div>
    );
}
export default ProfileSquare;
  