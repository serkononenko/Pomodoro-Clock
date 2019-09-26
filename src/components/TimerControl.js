import React from 'react';
import { IconButton, Grid } from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import CachedIcon from '@material-ui/icons/Cached';

export const TimerControl = ({ isLaunched, startStop, reset }) => {
    const handleClick = () => {
        startStop(isLaunched);
    }

    return (
        <Grid container justify='space-around'>
            <Grid item>
                <IconButton id='start_stop' color='inherit' onClick={handleClick}>
                    {isLaunched ? <PauseCircleOutlineIcon fontSize='large' /> : <PlayCircleOutlineIcon fontSize='large' />}
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton  id='reset' color='inherit' onClick={reset}>
                    <CachedIcon fontSize='large' />
                </IconButton>
            </Grid>
        </Grid>
    );
}