import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    background: {
        backgroundColor: "#58646D",
        minHeight: "50px"
    },
    text: {
        color: 'White'
    }
})

const Footer = (props) => {
    const { classes } = props;

    return (
        <footer className={classes.background}>
            <Grid
                container
                justify="center"
                alignItems="center"
                style={{ minHeight: '50px' }}

            >
                <Grid item>
                    <h3 className={classes.text}>Copyright Rose & Liz 2019</h3>
                </Grid>
            </Grid>
        </footer>
    )
}

export default withStyles(styles)(Footer);