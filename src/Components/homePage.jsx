import {
  Box,
  Button,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect } from "react";
import ExmpleChart from "./exmpleChart";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, 
    });
  }, []);

  const theme = useTheme();

  return (
    <Box bgcolor={theme.palette.primary.light}>

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
      <Box sx={{ margin: "auto", width: "1200px" }}>
        <Grid container justifyContent={"space-between"} alignItems={"center"} mt={5}>
          <Grid data-aos="fade-left" item xs={6}>
            <img
              src="https://i.ibb.co/mD5Ly5P/98oax-O-Logo-Makr.png"
              width={"500"}
            />
          </Grid>
          <Grid item xs={6} data-aos="fade-right">
            <Typography fontWeight={"bold"} dir="rtl">
              בוא לחסוך כסף!
            </Typography>
            <Typography  dir="rtl">
              רוצה לקנות דירה? רכב? יש לך שאיפות אבל אתה לא מצליח לחסוך? תמיד החשבון נשאר במינוס?, אנחנו פה לעשות סדר בבלאגן...לאט ובטוח נשמור על הכסף שלך לחיסכון טוב ובטוח, איתנו אתה יכול להיות בטוח שתצליח להגשים משאלות! 
            </Typography>
          </Grid>
        </Grid>

        <Grid container justifyContent={"space-between"} alignItems={"center"} mt={5}>
          <Grid item xs={6} data-aos="fade-right">
            <Typography fontWeight={"bold"} dir="rtl">
              בגדים? אוכל? בזבוזים?...
            </Typography>
            <Typography  dir="rtl">
              אצלנו אתה יכול להיות רגוע כשאתה מוציא כסף, אנחנו נחשב לך הוצאות חודשיות, נמתן את ההוצאות לכל קטגוריה, וניתן לך לגמור את החודש עם אוויר 
            </Typography>
          </Grid>{" "}
          <Grid data-aos="fade-left" item xs={6} dir="rtl">
            <img
              src="https://i.ibb.co/RbSncDd/5hz3x-J-Logo-Makr.png"
              width={"500"}
            />
          </Grid>
        </Grid>

        <Grid container justifyContent={"space-between"} alignItems={"center"} mt={5}>
          <Grid data-aos="fade-left" item xs={6}>
            <img
              src="https://i.ibb.co/68LtcSv/2au-F11-Logo-Makr-1.png"
              width={"500"}
            />
          </Grid>
          <Grid item xs={6} data-aos="fade-right">
            <Typography fontWeight={"bold"} dir="rtl">
              בוא לחסוך כסף!
            </Typography>
            <Typography  dir="rtl">
              רוצה לקנות דירה? רכב? יש לך שאיפות אבל אתה לא מצליח לחסוך? תמיד החשבון נשאר במינוס?, אנחנו פה לעשות סדר בבלאגן...לאט ובטוח נשמור על הכסף שלך לחיסכון טוב ובטוח, איתנו אתה יכול להיות בטוח שתצליח להגשים משאלות! 
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HomePage;
