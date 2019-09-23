import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    timer: {
        border: '7px solid #13353a',
        borderRadius: '40px',
        margin: '20px 50px',
        padding: '20px',
    }
})

export const Timer = ({ timer, isSession }) => {
    const classes = useStyles();

    return (
        <Box align='center' className={classes.timer}>
            <Typography id='timer-label' variant='h6'>
                {isSession ? 'Session' : 'Break'}
            </Typography>
            <Typography id='time-left' variant='h2'>
                {timer}
            </Typography>
        </Box>
    )
}