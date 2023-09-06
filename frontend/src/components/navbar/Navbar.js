import * as React from 'react';
import {Link} from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
//import Logo from '../../images/das.png';
import styles from "./Navbar.module.css";


function Navbar() {
  return (
      <div className={styles.sidebar}>
          {/* <Logo class={styles.iconButton}/>  */}
        <IconButton component={Link} to="/" style={{ color: 'white' }}>
          <SportsEsportsIcon />
        </IconButton>
        <IconButton component={Link} to="/leaderboard" style={{ color: 'white' }}>
          <LeaderboardIcon />
        </IconButton>
        <IconButton component={Link} to="/profile" style={{ color: 'white' }}>
          <AccountCircleIcon />
        </IconButton>
      </div>

  );
}

export default Navbar;
