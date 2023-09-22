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

import fractalImg from "@/images/3dFractal.gif"
import flockingImg from "@/images/BoidsSimGif.webp"


var projects = [
    {title:"Chaotic Fractals in 3D",tags:["fractals","rendering"],description:"Derived the equations for 3D variants of 2D fractals and displayed using GPU acelerated Point Cloud viewer.",src: fractalImg.src},
    {title:"JOGL Solar System",tags:["JOGL","rendering","OpenGL"],description:"Wrote a rendering engine to implement Bling-Phong shading on a procedural solar system",src: fractalImg.src},
    {title:"Flocking Simulation",tags:["Autonomous Agents","Big O","KD-Tree",,"Physics","Python"],description:"An implementation of Craig Renyolds Boids done in O(nlog(n)) by fractally subdividing space using a KD-Tree to approximate nearest neighbors.",src: flockingImg.src}    
]

function ProjectCard(props)
{
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={props.project.src}
                title="project cover image"
            />
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
                <Typography variant="body2" color="text.secondary">
                    {props.project.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default function ProjectTeaser(){
    return(
        <Box>
             <Carousel>
            {
                projects.map( (project, i) => <ProjectCard key={i} project={project} /> )
            }
            </Carousel>
        </Box>
    );
}