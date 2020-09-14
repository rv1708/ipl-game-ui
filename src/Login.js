import React from 'react';
//import logo from './logo.svg';
import { makeStyles } from '@material-ui/core/styles';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import logo from './ipl-logo.png';
import Button from '@material-ui/core/Button';
//import AccountCircle from '@material-ui/icons/AccountCircle';

function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}
//export default Header;


function App() {
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));
  
  const classes = useStyles();
  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    getData();
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  async function getData() {
    // Default options are marked with *
    const url = `http://localhost:3000/login?username=${username}`
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    return response; // parses JSON response into native JavaScript objects
  }
  console.log('username: {}', username);
  Header();
  return (
    <div className="App">  
      <img src={logo} />
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">Enter username</InputLabel>
        <Input
          id="input-with-icon-adornment"
          value={username}
          onChange={handleUsernameChange}
          startAdornment={
            <InputAdornment position="start">
              
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">Enter Password</InputLabel>
        <Input
          id="input-with-icon-adornment"
          value={password}
          type="password"
          onChange={handlePasswordChange}
          startAdornment={
            <InputAdornment position="start">
              
            </InputAdornment>
          }
        />
      </FormControl>
      <Button variant="contained">Default</Button>
    </div>
  );
}
export default App;
