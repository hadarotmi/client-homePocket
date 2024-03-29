import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";
// import { useMediaQuery } from "@mui/material";
import HomePage from './Components/homePage';
import AppRoutes from "./Components/appRouters";

const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#5ECFB7",
      dark: "#118E86",
      light:"#EBFDFB"
    },
    secondary: {
      main: "#f2f2f4",
      dark: "#c7c7ca",
    },
  },
  typography: {
    fontFamily: `'Rubik', sans-serif`,
  },
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

// const myStore = configureStore({
//   reducer: {
//     sadamReducer,
//     userReducer,
//     reportReducer,
//   },
// });

const App=() => {
  // const isMobile = useMediaQuery(useTheme().breakpoints.down("sm"));
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        {/* <Provider store={myStore}> */}
        <AppRoutes/>
        {/* </Provider> */}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
