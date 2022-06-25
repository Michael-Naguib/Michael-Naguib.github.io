import * as React from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

export const theme = createTheme({
    status: {
        danger: orange[500],
    },
});