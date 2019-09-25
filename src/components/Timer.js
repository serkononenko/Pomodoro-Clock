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

    const minutes = timer.getMinutes() < 10 ? `0${timer.getMinutes()}` : timer.getMinutes();
    const seconds = timer.getSeconds() < 10 ? `0${timer.getSeconds()}` : timer.getSeconds();

    return (
        <Box align='center' className={classes.timer}>
            <Typography id='timer-label' variant='h6'>
                {isSession ? 'Session' : 'Break'}
            </Typography>
            <Typography id='time-left' variant='h2'>
                {`${minutes}:${seconds}`}
            </Typography>
        </Box>
    )
}