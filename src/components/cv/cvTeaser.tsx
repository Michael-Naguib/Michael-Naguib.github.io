import * as React from 'react';
import { Paper, Button } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function CvTeaser() {
    return(
        <Paper elevation={3}>
            <Grid container={true} spacing={2} padding={2} wrap='wrap' alignItems="center">
                <Grid item md={4} xs={12}>
                </Grid>
            </Grid>
        </Paper>
    );
}