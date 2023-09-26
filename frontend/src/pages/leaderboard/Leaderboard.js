import { fontFamily } from "@mui/system";
import LeaderboardElement from "../../components/leaderBoardElement/LeaderBoardElement"; 

export default function Home() {
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
      fontFamily: 'Copperplate'
    },
    window:{
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
    },
  }

  const players = [{'name':'catom'}, {'name':'denis'}, {'name':'daniel'}]
  return (
    <div style = {style.window}>
      <div style={style.listStyle}>
        <div style={style.titels}>
          <div>#</div>
          <div style={{marginLeft:'30px'}}>Name</div>
          <div style={{marginLeft:'10vw'}}>Anaf</div>
          <div style={{marginLeft:'10vw'}}>Mador</div>
          <div style={{marginLeft:'auto'}}>Score</div>
        </div>
        {players.map((player) => 
            <LeaderboardElement player={player}></LeaderboardElement>
        )}
        
      </div>
    </div>
  );
}