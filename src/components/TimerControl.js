import React from 'react';
import { IconButton, Grid } from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import CachedIcon from '@material-ui/icons/Cached';

export const TimerControl = ({ isLaunched, start, pause, reset }) => {
    return (
        <Grid container justify='space-around'>
            <Grid item>
                <IconButton color='inherit' onClick={isLaunched ? pause : start}>
                    {isLaunched ? <PauseCircleOutlineIcon fontSize='large' /> : <PlayCircleOutlineIcon fontSize='large' />}
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton color='inherit' onClick={reset}>
                    <CachedIcon fontSize='large' />
                </IconButton>
            </Grid>
        </Grid>
    );
}