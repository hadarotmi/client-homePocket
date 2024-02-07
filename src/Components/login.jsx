import React, { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import { TOKEN_NAME, doApiLogin } from '../services/apiService';
// import { useDispatch } from 'react-redux';
// import { login } from '../features/userSlice';
import {
  Alert,
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Login = () => {
  //   const dispatch = useDispatch();
  const [err, setErr] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let user = {
      email: data.get("email"),
      password: data.get("password"),
    };

    // try {
    //   await doApiLogin(user);
    //   if (localStorage[TOKEN_NAME] != null) {
    //     dispatch(login({}))
    //     window.location.href = "/"
    //   } else {
    //     setErr(true)
    //   }
    // }
    // catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        opacity: ".8",
        backgroundImage:
          "url(https://i.ibb.co/wcyK1zp/pexels-burst-545064.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}
    >
      <Container component={"main"} dir="rtl" maxWidth="xs">
        {err && <Alert severity="error">שם משתמש או סיסמא שגויים</Alert>}
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "30px",
            borderRadius: "20px",
            background: "white",
            opacity: ".9",
            boxShadow: "15px",
            color: "white",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#0D9488" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ color: "black" }}>
            כניסה
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="מייל"
              name="email"
              autoComplete="email"
              autoFocus
              color="primary"
            />
            <FormControl fullWidth sx={{ mt: 1 }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                סיסמה
              </InputLabel>
              <OutlinedInput
                margin="normal"
                fullWidth
                name="password"
                label="סיסמה"
                id="password"
                autoComplete="current-password"
                color="primary"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityOff color="primary" />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="primary"
            >
              כניסה
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/" variant="body2" style={{ color: "#0D9488" }}>
                  שכחת את הסיסמה?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/" variant="body2" style={{ color: "#0D9488" }}>
                  {"אין לך חשבון? הירשם"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
