/**
 * @description This File is intended as a page Listing information about me
 * */
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import NavigationBar from "../Global Components/Navigation-Bar.tsx";
import {theme} from "../Global Components/Themes";
import {ThemeProvider} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

export default function Articles_Showcase(){
    return(

        <ThemeProvider theme={theme}>
            <NavigationBar/>
            <Container align={"center"}>
                <Typography variant="h1" gutterBottom> About Me</Typography>
                <Typography variant="body1" gutterBottom>
                    My name is Michael.

                    I am a Computer Scientist and Mathematician who enjoys working on all sorts of different projects.
                    I greatly enjoy learning, especially if it's mathematically related.

                    I currently work as a software enginneer for L3 harris Aeromet on Video related work and I have
                    previously worked as as undergraduate researcher in multiagent ai systems.

                    My hobbies include Rock Climbing 🧗, XC Running 🏃, & Acoustic Guitar 🎸.
                </Typography>
            </Container>
        </ThemeProvider>
    );
};