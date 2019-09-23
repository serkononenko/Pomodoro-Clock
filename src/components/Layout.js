import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    container: {
        background: '#1E555C',
        color: 'white'
    },
    grid: {
        minHeight: '100vh'
    }
})

export const Layout = ({ children }) => {
    const classes = useStyles();
    return (
        <Container maxWidth='xl' id='container' className={classes.container}>
            <Grid container alignItems='center' justify='center' className={classes.grid}>
                {children}
            </Grid>
        </Container>
    );
}