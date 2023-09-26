import LeaderboardElement from "../../components/leaderBoardElement/LeaderBoardElement"; 

export default function Home() {
  const style = {
    titels: {
      color: 'white',
      display: 'flex',
      paddingLeft: '20px',
    },
    listStyle: {
      display:'flex',
      flexDirection: 'column',
      width: '90%',
      paddingTop: '30px',
    }
  }

  const players = [{'name':'catom'}, {'name':'denis'}, {'name':'daniel'}]
  return (
    <div style={style.listStyle}>
      <div style={style.titels}>
        <div>#</div>
        <div style={{marginLeft:'20px'}}>Name</div>
        <div>Anaf</div>
        <div>Mador</div>
        <div style={{marginLeft:'auto'}}>Score</div>
      </div>
       {players.map((player) => 
          <LeaderboardElement player={player}></LeaderboardElement>
       )}
      
    </div>
  );
}