import React from "react";

function ProfileSquare({player, displayedProfile, position}) {
    const apiStaticProfilePicsFolder = "http://localhost:8000/static/user_profile_pics/"
    const style = {
        profileStyle:{
            backgroundColor: 'black',
            display: player.username === displayedProfile ? 'flex' : 'none',
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
            backgroundImage: `url(${apiStaticProfilePicsFolder + player.profile_pic_name})`,
            backgroundSize: 'cover',
            borderStyle: 'solid',
            borderColor: 'white',
          }
      }
    
    return (
      <div style={style.profileStyle}>
          <div style={style.mediumProfileImageStyle}></div>
          <div>{player.username}</div>
      </div>
    );
}
export default ProfileSquare;
  