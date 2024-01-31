import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ExmpleChart from "./exmpleChart";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // משך האנימציה במילישניות
    });
  }, []);

  const theme = useTheme();

  return (
    <Box bgcolor={theme.palette.primary.light}>
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
          <Button
            color="inherit"
            sx={{
              mr: 2,
              bgcolor: theme.palette.primary.main,
              color: theme.palette.primary.light,
            }}
          >
            כניסה
          </Button>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          pb: 2,
          paddingTop: "150px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "black",
        }}
      >
        <Box ml={5} data-aos="fade-right">
          <Typography variant="h1" gutterBottom fontWeight={"bold"} m={0}>
            ?יש חור בכיס{" "}
          </Typography>
          <Typography variant="h4" fontWeight={"bold"}>
            !טובעים בים של מספרים? אנחנו כאן לעזור
          </Typography>
          <Button variant="contained" size="large" sx={{ mt: 4 }}>
            בוא נתחיל
          </Button>
        </Box>
        <Box mr={4} data-aos="fade-left">
          <img src="https://i.ibb.co/tmTsmLw/i-Phone-8-Plus-1.png" />
        </Box>
      </Box>
      <Box sx={{ paddingTop: "200px" }}>
        <ExmpleChart />
      </Box>

        <Grid container justifyContent={"center"}>
          <Grid data-aos="fade-left" item xs={6}>
            <img src="https://i.ibb.co/x2wSRLZ/2au-F11-Logo-Makr-1.png" />
          </Grid>
          <Grid item xs={6}>
             <Typography fontWeight={"bold"}>
            !טובעים בים של מספרים? אנחנו כאן לעזור
          </Typography>
          </Grid>
         
        </Grid>
    </Box>
  );
};

export default HomePage;
