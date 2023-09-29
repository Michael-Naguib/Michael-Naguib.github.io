"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import CardActions from "@mui/material/CardActions"
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import Grid from '@mui/material/Grid';

import fractalImg from "@/images/3dFractal.gif"
import flockingImg from "@/images/BoidsSimGif.webp"
import tspImg from "@/images/StemLoungeTSPUSA.gif"
import solarImg from "@/images/SolarSystem.webp"
import gitImg from "@/images/github.gif"

var projects = [

    {
        title:"Solar System",
        tags:["JOGL","rendering","OpenGL","Java"],
        description:"A rendering engine using JOGL implementing Bling-Phong shading on a proceduraly specified solar system.",
        imgSrc: solarImg.src,
        links: [
            {
                title:"🔒Private Code - Request",
                url: ""//TODO: redirect to page explaining why I don't make source code available -> accademic 
            }
        ]
    },
    {
        title:"Flocking Simulation",
        tags:["Autonomous Agents","Big O","KD-Tree",,"Physics","Python"],
        description:"An implementation of Craig Renyolds Boids done in O(nlog(n)) by fractally subdividing space using a KD-Tree to approximate nearest neighbors.",
        imgSrc: flockingImg.src,
        links: [
            {
                title:"Read More 🦅",
                url: "https://github.com/Michael-Naguib/BoidsSimulation"
            }
        ]
    },
    {
        title:"Traveling Salesperson Problem Solver",
        tags:["TSP","Big O","MPI","HPC","C"],
        description:"Implementation of a multi-root search nearest neighbor approach in C with MPI on an HPC cluster to provide estimations of the solution to the TSP Problem. (Image credit Stem Lounge)",
        imgSrc: tspImg.src,
        links: [
            {
                title:"🔒Private Code - Request",
                url: "" //TODO: redirect to page explaining why I don't make source code available -> accademic 
            }
        ]
    },
    {
        title:"Chaotic Fractals in 3D",
        tags:["fractals","rendering"],
        description:"Derived the equations for 3D variants of 2D fractals and displayed using GPU acelerated Point Cloud viewer.",
        imgSrc: fractalImg.src,
        links: [
            {
                title:"👉🏻 Read More",
                url: "https://github.com/Michael-Naguib/ChaoticIFSFractal3D"
            }
        ]
    },
    {
        title:"MyGithub",
        tags:["Code","Project","Git","Github"],
        description:" My public github with examples of my work and projects",
        imgSrc: gitImg.src,
        links: [
            {
                title:"🐈Read More 🐙",
                url: "https://github.com/Michael-Naguib"
            }
        ]
    },

]

function ProjectCard(props){
    return (
        <Paper elevation={3}>
            <Typography variant="h4" p={2} >Projects</Typography>
            <Grid container={true} spacing={2} padding={2} wrap='wrap' alignItems="center">
                <Grid item md={4} xs={12}>
                    <CardMedia
                        sx={{ height: 300 }}
                        image={props.project.imgSrc}
                        title="project cover image"
                    />
                </Grid>
                <Grid item md={8} xs={12}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.project.title}
                        </Typography>
                        <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={1}
                        flexWrap='wrap'
                        >
                            {
                            props.project.tags.map( (tag, i) => <Chip key={i} variant="outlined" label={tag} color="primary" size="small"/> )
                            }
                        </Stack>
                        <Typography variant="body2" sx={{marginTop:"20px"}}color="text.secondary">
                            {props.project.description}
                        </Typography>
                    </CardContent>
                    <CardActions style={{ display: "flex", justifyContent: "flex-end" }}>
                        {
                            props.project.links.map( (link, i) => <Button key={i} size="small" component={Link} href={link.url}> {link.title}</Button> )
                        }
                    </CardActions>
                </Grid>
            </Grid>
    </Paper>
    );
}

export default function ProjectTeaser(){
    //https://learus.github.io/react-material-ui-carousel/
    return(
        <Box>
             <Carousel interval={4000} autoPlay={true} swipe={true} sx={{ minWidth: 0}}>
            {
                projects.map( (project, i) => <ProjectCard key={i} project={project} /> )
            }
            </Carousel>
        </Box>
    );
}