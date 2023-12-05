import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../fireConfig';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LoginClient = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  localStorage.setItem('email',email);
  localStorage.setItem('password',password);
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        if(email==='hamzagr707@gmail.com' && password==='101101')
        {
          navigate('/articles');
        }
        else
        {
          navigate('/Home');
        }
        
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert(errorMessage);
      });
  };

  const forgotPass = () => {
    if (email) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          console.log('Password reset email sent!');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert('Type your Email');
    }
  };

  return (
    <>
    <div style={{position: "relative"}}>
    <img src='./logo1.jpg' style={{position: 'absolute',top: '-5.5cm',left: '-1cm' ,height:'300px',width:'200px'}}alt='logo de projet'/>
    </div>
    <Container component="main" maxWidth="xs">
      <Box sx={{ marginTop: 20,display: 'flex',flexDirection: 'column',alignItems: 'center',border: 'solid 2px gray',padding: '40px',width: '470px'}}>
        <Typography component="h1" variant="h5">Login</Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField margin="normal" required fullWidth id="email" label={<EmailIcon />} name="email" autoComplete="email" autoFocus onChange={({ target }) => setEmail(target.value)} />
          <TextField margin="normal" required fullWidth name="password" label={<PasswordIcon />} type="password" id="password" autoComplete="current-password" onChange={({ target }) => setPassword(target.value)} />
          <Button type="submit" fullWidth variant="contained">Sign In</Button>
          <Grid container>
            <Grid item xs>
              <Link onClick={forgotPass}>Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link to="/singup">Don't have an account? Sign Up</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
    </>
  );
};

export default LoginClient;
