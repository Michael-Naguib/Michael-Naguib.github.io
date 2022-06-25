import React from 'react';
import { Routes, Route, Link,useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
const pages = [
    {link:"/",displayName:"Home"},
    {link:"/about",displayName:"About"},
    {link:"/flocking-simulation",displayName:"Flocking Simulation"},
];

//

export default function NavigationBar(){
    let navigate = useNavigate();
    return(

        <Box sx={{ flexGrow: 1 }} className={"NavigationBar"}>
            <AppBar position="static">
                {/*Page Links*/}
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                        <Button
                            key={page.link}
                            onClick={(e)=>{navigate(page.link,{});}}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {page.displayName}
                        </Button>
                    ))}
                </Box>

            </AppBar>
        </Box>
    );
}
