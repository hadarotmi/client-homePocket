import {
  Box,
  //   CircularProgress,
  //   Container,
  //   Paper,
  Typography,
  keyframes,
  useTheme,
} from "@mui/material";
import React from "react";
// import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomePage = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box position="relative">
        <img
          className="fullWidthImage"
          src="https://i.ibb.co/rv1YD9X/pexels-pixabay-259165.jpg"
          alt="Background"
          width="100%"
          style={{ opacity: "0.7" }}
        />
        <Box
          position="absolute"
          top="30%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
          color="black"
        >
          <Typography variant="h1" gutterBottom fontWeight={"bold"}>
            Home Pocket{" "}
          </Typography>
          <Typography variant="h4" fontWeight={"bold"}>
          ...ניהול כלכלי חכם למשפחה
          </Typography>
        </Box>
      </Box>
      {/* <Container maxWidth="md">
        <Carousel
          showArrows={true}
          showStatus={false}
          showIndicators={true}
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          interval={5000}
          sx={{ borderRadius: "40px" }}
        >
          {images.map((image, index) => (
            <Box key={index} sx={{ borderRadius: "40px" }}>
              <img
                src={image}
                alt={`Slide ${index}`}
                style={{ borderRadius: "40px" }}
              />
            </Box>
          ))}
        </Carousel>
      </Container> */}
      <Typography variant="h2" textAlign={"center"}>
        הדרך שלך להצליח
      </Typography>
    </Box>
  );
};

export default HomePage;
