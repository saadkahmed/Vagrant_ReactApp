import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { FormControl, InputLabel, FormControlLabel, Checkbox } from '@material-ui/core';
import Input from '@material-ui/core/Input';

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    paperStyle: {
        width:400,
        margin: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding:'20px'
    }
}

class Login extends Component {
  render() {
      console.log(this.props);
    return (
      <div style={styles.main}>
        <Paper style={styles.paperStyle}>
            <Avatar>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                    Sign In
            </Typography>
            <form>
                <FormControl>
                    <InputLabel htmlFor="email">Email Address</InputLabel>
                    <Input id="email" name="email" autoComplete="email" autoFocus />
                </FormControl><br></br>
                <FormControl>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input id="password" name="password" type="password" autoComplete="current-password"/>
                </FormControl><br></br>
                <FormControlLabel 
                    control={<Checkbox value="remember" color="primary"/>}
                    label="Remember Me"
                />
            </form>
        </Paper>
      </div>
    );
  }
}

export default Login;