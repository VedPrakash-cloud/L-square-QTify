import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Navbar/Navbar';
import Hero from './Hero/Hero';
import Card from './cards/TopAlbum';
import Album from './NewAlbum/NewAlbum'
import reportWebVitals from './reportWebVitals';
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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <ThemeProvider theme={theme}>
            <App />
            <Hero />
            <Card />
            <Album />
        </ThemeProvider>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
