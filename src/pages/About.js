import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
    header: {
        background: "#e0ede3",
        margin: "50px 0px 0px 0px"
    },
    headerFont: {
        fontSize: "7rem",
        fontFamily: "'Sacramento', cursive"
    },
    subFont: {
        fontSize: "3rem",
        fontFamily: "'Josefin Slab', serif"
    },
    gridItem: {
        margin: "20px",
        padding: "10px"
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
                    <Grid item style={{ textAlign: "center" }}>
                        <h1 className={classes.headerFont}>Our Story</h1>
                        <h2 className={classes.subFont}>Twin sisters on a mission to change the bag industry.</h2>
                    </Grid>
                </Grid>
            </header>

            <main>
                <Grid
                    container
                    spacing={0}
                    justify="center"
                    style={{ minHeight: '35vh' }}
                >
                    <Grid item xs={11} md={5} className={classes.gridItem}>
                        <img alt="Kelly and Erin as children." style={{ maxWidth: "100%" }} src="/images/aboutHead1.jpg"></img>
                    </Grid>

                    <Grid item md={5} className={classes.gridItem + " " + classes.subFont} style={{ textAlign: "center" }}>
                        <h1>About Us</h1>
                        <h2>Twin sisters, Erin and Kelly, co-founded Rose & Liz after working corporate jobs for a few years after college
                            and finding that women were getting the short end of the stick in the laptop bag market.
                            Deciding that women deserved more than just skimpy laptop sleeves and pocket-less tote bags for work,
                            they set out to create their own vision of a practical, professional, and feminine work bag. </h2>
                    </Grid>
                </Grid>
            </main>
        </div>
    )
}

export default withStyles(styles)(About);