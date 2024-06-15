import { Container, Paper, Typography, TextField, Button,Stack,IconButton,Avatar } from "@mui/material";
import React, { useState } from "react";
import {CameraAlt as CameraAltIcon} from "@mui/icons-material"
import { VisuallyHiddenInput } from "../components/styles/StyleComponent";
import {useFileHandler, useInputValidation } from "6pp"
import { usernameValidator } from "../utils/validator";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => setIsLogin((prev) => !prev);
  const name =useInputValidation("")
  const bio =useInputValidation("")
  const username =useInputValidation("",usernameValidator)
  const password =useInputValidation("")

  const avatar = useFileHandler("single")

  const handleLogin=(e)=>{
    e.preventDefault()
  }

  const handleSignup=(e)=>{
    e.preventDefault()
  }

  return (

    //  <div style={{
    //   backgroundImage: "linear-gradient(rgba(200, 200, 200, 0.5), rgba(120, 210, 220, 0.5))" }}>
    <Container component={"main"} maxWidth="xs" sx={{
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }}>
      <Paper 
        elevation={3}
        sx={{
          // marginTop:4,
          padding: 4,
          display: "flex",
          flexDirection: "column",
          
          alignItem: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form style={{width:"100%", marginTop:"1rem"}} onSubmit={handleLogin} >
              <TextField
                required 
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />
              <Button
                sx={{
                  marginTop: "1rem",
                }}
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                Login
              </Button>
              <Typography textAlign="center" m="1rem" >OR</Typography>
              <Button
                
                variant="text"
                fullWidth
                onClick={toggleLogin}
              >
                Sign Up
              </Button>
            </form>
          </>
        ) : (
            <>
            <Typography variant="h5" marginTop={"4rem"}>Sign Up</Typography>
            <form style={{width:"100%",marginTop:"1rem"}} onSubmit={handleSignup} >
            <Stack position={"relative"} width={"10rem"} margin={"auto"} >

            <Avatar sx={{
                width:"10rem",
                height:"10rem",
                ObjectFit:"contain",
            }} 
              src={avatar.preview}
            />
            
            <IconButton sx={{
              position:"absolute",
              bottom:0,
              right:0,
              color:"black",
              bgcolor:"rgba(0 0 0 .9)",
              ":hover":{
                
                bgcolor:"rgba(0 0 0 .7)"
              },
            }}
            component="label"
             >
                <>
                    <CameraAltIcon/>
                    <VisuallyHiddenInput type="file" onChange={avatar.changeHandler} />
                </>
            </IconButton>

            </Stack>

            {
                avatar.error &&(
                  <Typography color="error" variant="caption" m={"1rem auto"} width={"fit-content"} display={"block"} color="error" variant="caption ">{avatar.error}</Typography>
                )
              }
            <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                value={name.value}
                onChange={name.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
                value={bio.value}
                onChange={bio.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />
              {
                username.error &&(
                  <Typography color="error" variant="caption">{username.error}</Typography>
                )
              }
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />
              
              <Button
                sx={{
                  marginTop: "1rem",
                }}
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                Sign Up
              </Button>
              <Typography textAlign="center" m="1rem" >OR</Typography>
              <Button
                
                variant="text"
                fullWidth
                onClick={toggleLogin}
              >
                Login
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
    // </div>
  );
}

export default Login;




