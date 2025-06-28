import Box from '@mui/material/Box';
import React from 'react';
import Headphone from '../assets/vibrating-headphone 1.svg'
import classes from './Hero.module.css'


export default function hero(){

    return (
        <Box className={classes.background}>
            <div className={classes.text}>
                <h2>100 Thousand Songs, ad-free</h2>
                <h2>Over thousands podcast episodes</h2>
            </div>
            <img src={Headphone} alt='Headphone' />
        </Box>
    );
}