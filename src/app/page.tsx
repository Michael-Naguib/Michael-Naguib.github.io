import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import MediaCard from '@/components/MediaCard';
import AboutTeaser from '@/components/about/AboutTeaser';
import ProjectTeaser from '@/components/projects/ProjectTeaser';
import CvTeaser from '@/components/cv/cvTeaser';
import Divider from '@mui/material/Divider';
//TODO: add google track https://stackoverflow.com/questions/49279820/adding-google-analytics-to-react

export default function HomePage() {
  return (
    <Box sx={{ display: 'flex' }}>
      <div>
        <AboutTeaser/>
        <Divider/>
        <ProjectTeaser/>
        <Divider/>
        <CvTeaser/>
      </div>
    </Box>
  );
}
