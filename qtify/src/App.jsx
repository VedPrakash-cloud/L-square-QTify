import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "../src/Hero/Hero";
import TopAlbum from "../src/cards/TopAlbum";
import NewAlbum from "../src/NewAlbum/NewAlbum";
import SongTabs from "../src/Songs/SongTabs"
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette:{
        primary:{
            main:"#34c94b",
        },
        secondary:{
            main:"#121212",
        },
        tertiary:{
            main: "#ffffff",
        },
    }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Hero />
      <TopAlbum />
      <NewAlbum />
      <SongTabs />
    </ThemeProvider>
  );
}

export default App;