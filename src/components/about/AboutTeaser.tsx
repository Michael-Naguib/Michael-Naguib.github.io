"use client"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { Button } from '@mui/material';
import profilePicture from '@/images/AboutMePhotoFixed.webp'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function AboutTeaser() {
    return (
        <Paper elevation={3} style={{backgroundSize:"cover",backgroundImage:"url(https://images.unsplash.com/photo-1484856299450-fb14549bca50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1898&q=80"}}>
            <Grid container={true} spacing={2} padding={2} wrap='wrap' alignItems="center">
                <Grid item md={4} xs={12}>
                    <CardMedia
                        sx={{borderRadius:"50%",objectFit: "contain" }}
                        component="img"
                        image={profilePicture.src}
                        alt="Michael Naguib"
                    />
                </Grid>
                <Grid item md={8} xs={12}>
                    <Item >
                        <Typography variant="h4" gutterBottom>
                            Computer Scientist — Mathmatician — Software Engineer
                        </Typography>
                        <Typography variant='subtitle1' gutterBottom>
                            I am a student wherever I am, always seeking to learn and understand
                            new ideas surrounding the fields of Mathematics & Computer Science.
                            Often I will code a project simply because it sounds interesting.  
                            Understanding the fundamental logic and intuitive steps of a process 
                            for me is one of the more rewarding aspects of my field of study. 
                        </Typography>
                    </Item>
                </Grid>
                <Grid item md={12} xs={12}  style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button variant="contained" component={Link} href="/about"  >
                      👉🏻 Read More 
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
}