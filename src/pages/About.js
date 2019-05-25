import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
    header: {
        background: "#e0ede3",
    },
    headerFont: {
        fontSize: "7rem",
        fontFamily: "'Sacramento', cursive"
    }
});

const About = (props) => {
    const { classes } = props;

    return (
        <div>
            <header className={classes.header}>
                <Grid
                    container
                    spacing={0}
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '35vh' }}
                >
                    <Grid item>
                        <h1 className={classes.headerFont}>Our Story</h1>
                    </Grid>
                </Grid>
            </header>
        </div>
    )
}

export default withStyles(styles)(About);