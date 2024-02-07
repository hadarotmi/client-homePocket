import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import SingUp from './singUp';
// import HomeIcon from '@mui/icons-material/Home';
// import Profile from './profile';
// import Loading from './loading';
// import NotFound from './notFound';
// import ForgetPassword from './forgetPassword';
// import LogoutIcon from '@mui/icons-material/Logout';
// import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
// import CottageIcon from '@mui/icons-material/Cottage';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomePage from "./homePage";
import {
  AppBar,
  IconButton,
  Toolbar,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Login from "./login";

const AppRoutes=()=> {
  const theme = useTheme();

  return (
    <BrowserRouter>
        <AppBar sx={{ bgcolor: theme.palette.primary.dark }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ color: theme.palette.primary.light }}
            >
              <MenuIcon />
            </IconButton>
            {/* <Button
              color="inherit"
              sx={{
                mr: 2,
                bgcolor: theme.palette.primary.main,
                color: theme.palette.primary.light,
              }}
            >
              כניסה
            </Button> */}
            <Link to="/login" >כניסה</Link>

          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
           <Route path="/login" element={<Login />}></Route>
          {/*<Route path="/singUp" element={<SingUp />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/forgetPassword" element={<ForgetPassword />}></Route>
          <Route path="/*" element={<NotFound />}></Route> */}
        </Routes>{" "}
    </BrowserRouter>
  );
}

export default AppRoutes;
