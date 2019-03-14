import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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
        margin: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding:'40px'
    }
}

class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    
    render() {

    return (
      <div style={styles.main}>
        <Paper style={styles.paperStyle}>
            <Avatar>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                    Sign In
            </Typography>
            <form onSubmit={this.handleSubmit}>
                <FormControl>
                    <InputLabel htmlFor="email">Email Address</InputLabel>
                    <Input id="email" name="email" autoComplete="email" onChange={this.handleChange} autoFocus />
                </FormControl><br></br>
                <FormControl>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input id="password" name="password" type="password" onChange={this.handleChange} autoComplete="current-password"/>
                </FormControl><br></br>
                <FormControlLabel 
                    control={<Checkbox value="remember" color="primary"/>}
                    label="Remember Me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                Sign In
                </Button>
            </form>
        </Paper>
      </div>
    );
  }
}

export default Login;