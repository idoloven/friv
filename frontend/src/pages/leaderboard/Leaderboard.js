import { fontFamily } from "@mui/system";
import LeaderboardElement from "../../components/leaderBoardElement/LeaderBoardElement"; 

export default function LeaderBoard() {
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
    gamesBar:{
      display:'flex',
      backgroundColor: 'black',
      width: '85%',
    },
    gameTab:{
      borderColor: 'white',
      color: 'white',
    }
  }

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