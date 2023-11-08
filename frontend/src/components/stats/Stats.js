import React, { useState, useEffect } from 'react';

var colors = ['#C8E8CF', '#FFE9DA', '#F6D2E6', '#E8E7FD', '#D291BC', '#FFFBC7', '#C6F2FF'];

const StatsContainer = ({ stats, games }) => {
    const [currentGame, setCurrentGame] = useState("chess");
    const style = {
        largeContainer: {
            backgroundColor: 'rgba(34,36,69,0.9)',
            borderStyle: 'solid',
            borderColor: 'white',
            height: '50%',
            width: '85%',
            paddingRight: '5vw',
            marginTop: '1vh',
            zIndex: '6',
            borderRadius: '20px',
            display: 'flex',
            overflow: 'hidden',
          },
        statsContainer: {
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'column',
          width: '80%',
          height: '100%',
        },
        navbar: {
            display:  'flex',
            flexDirection: 'column',
            width: '20%',
            height: '100%',
            color: 'white',
            borderRight: 'solid white',
            overflowY: 'auto',
        },
        gameTab: {
            minHeight: '10%',
            borderBottom: 'solid white',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '10px',
            backgroundColor: 'transparent',
            color: 'white',
            borderStyle: 'none',
            fontSize: '16px',
        },
        selectedGameTab: {
            transition: '0.2s',
            minHeight: '10%',
            color: '#522a96',
            backgroundColor: 'white',
            borderBottom: 'solid white',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '10px',
            borderStyle: 'none',
            fontSize: '16px',
        }
    }
  return (
    <div style={style.largeContainer}>
        <div style={style.navbar}>
            {games.map((game) => 
                <React.Fragment key={game.game_name}>
                    <button 
                    style={game.game_name === currentGame ? style.selectedGameTab : style.gameTab}
                    onClick={() => {setCurrentGame(game.game_name)}}>
                            {game.game_name}
                    </button>
                </React.Fragment>
            )}
        </div>
        <div style={style.statsContainer}>
        {stats.map((stat) => (
            <React.Fragment key={stat.name}>
                <Stat stat={stat} color={colors[Math.floor(Math.random() * colors.length)]}/>
            </React.Fragment>
        ))}
        </div>
    </div>
  );
};

const Stat = ({ stat, color }) => {
    const style = {
        stat: {
          margin: '10px',
          height: '25%',
          widht: '25%',
          color: `${color}`
        },
    }
  return <div style={style.stat}>
      <div style={{fontSize:'40px', fontFamily: 'fantasy'}}>{stat['value']}</div>
      <div style={{fontSize:'15px', fontFamily: 'cursive', fontStyle: 'italic'}}>{stat['name']}</div>
  </div>;
};

export default StatsContainer;
