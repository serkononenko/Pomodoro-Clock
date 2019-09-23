import React from 'react';
import { Typography, Box } from '@material-ui/core';

export const MainTitle = () => {
    return (
        <Box id='main-title' m={5} align='center'>
            <Typography variant='h3' component='h1'> 
                Pomodoro Clock
            </Typography>
        </Box>
    );
}