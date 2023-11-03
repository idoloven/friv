import React from 'react';



var colors = ['#C8E8CF', '#FFE9DA', '#F6D2E6', '#E8E7FD', '#D291BC', '#FFFBC7', '#C6F2FF'];

const StatsContainer = ({ stats }) => {
    const style = {
        statsContainer: {
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
          flexWrap: 'wrap',
          flexDirection: 'column',
        },
    }
  return (
    <div style={style.statsContainer}>
      {stats.map((stat) => (
        <Stat stat={stat} color={colors[Math.floor(Math.random() * colors.length)]}/>
      ))}
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
