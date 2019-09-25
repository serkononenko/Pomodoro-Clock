import React from 'react';
import { Typography, Grid, IconButton } from '@material-ui/core';
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';

export const LengthControl = ({ title, id, level, inc, dec, timer }) => {

    const handleIncClick = (e) => {
        inc(timer);
        e.preventDefault();
    }

    const handleDecClick = (e) => {
        dec(timer);
        e.preventDefault();
    }

    return (
        <>
            <Typography id={`${id}-label`} align='center' component='div' variant='h6'>
                {title}
            </Typography>
            <Grid container justify='space-between' alignItems="center">
                <Grid item>
                    <IconButton id={`${id}-decrement`} onClick={handleDecClick} color='inherit'>
                        <ExpandMoreRoundedIcon fontSize='large' />
                    </IconButton>
                </Grid>
                <Grid item>
                    <Typography id={`${id}-length`} variant='h6'>
                        {level}
                    </Typography>
                </Grid>
                <Grid item>
                    <IconButton id={`${id}-increment`} onClick={handleIncClick} color='inherit'>
                        <ExpandLessRoundedIcon fontSize='large' />
                    </IconButton>
                </Grid>
            </Grid>
        </>
    )
}