import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import {getAuth, createUserWithEmailAndPassword ,sendEmailVerification} from "firebase/auth";
import { useNavigate } from 'react-router-dom';


function Signup() {

    const navigate=useNavigate();
    const [email, SetEmail] = useState("");
    const [pwd, setPwd] = useState("");

    const auth = getAuth();
   
    const sub = async (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, pwd)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            navigate('/')
            sendEmailVerification(auth.currentUser)
            .then(() => {
              console.log("Email Sent");
                  })

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage);
		alert(errorMessage);
        });
    };

    return (
        <Container component="main" maxWidth="xs">
    
        <Box
          sx={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border:"solid 2px gray",
            padding:"40px",
            width: "400px",
          }}
        >
                    <Typography component="h1" variant="h5">
           Sign Up
          </Typography>
          <Box component="form" onSubmit={sub} noValidate sx={{ mt: 1 }}>
          
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label={<EmailIcon />}
              name="email"
              autoComplete="email"
              autoFocus
              onChange={({ target }) =>     
              SetEmail(target.value)}
            />
             <TextField
              margin="normal"
              required
              fullWidth
              name="pwd"
              label={ <PasswordIcon />}
              type="password"
              id="pwd"
              autoComplete="current-password"
              onChange={({ target}) => 
              setPwd(target.value)}
            /> 
              
              <Button
            type="submit"
            fullWidth
            color="secondary"
            variant="contained"
            >
            Sign In
          </Button>
        
       </Box>
        </Box>
        </Container>
    );
}
export default Signup;

