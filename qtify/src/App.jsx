import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Hero from "../src/Hero/Hero";
import TopAlbum from "../src/cards/TopAlbum";
import NewAlbum from "../src/NewAlbum/NewAlbum";
import SongTabs from "../src/Songs/SongTabs";
import Faq from "../src/FAQ/Faq"
import AlbumPage from "./SongList/SongList";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#34c94b",
    },
    secondary: {
      main: "#121212",
    },
    text: {
      main: "#ffffff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <TopAlbum />
                <NewAlbum />
                <SongTabs />
                <Faq />
              </>
            }
          />
          <Route path="/album/:albumId" element={<AlbumPage />} />
        </Routes>
    </ThemeProvider>
  );
}

export default App;
