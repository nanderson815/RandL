import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
    header: {
        background: "#f1f2f3",
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
                {/* Grid #1 - Sisters and Best Friends */}
                <Grid
                    container
                    spacing={0}
                    justify="center"
                    alignItems="center"
                    style={{ minHeight: '60vh' }}
                >
                    <Grid item xs={11} md={5} className={classes.gridItem}>
                        <img alt="Kelly and Erin as children." style={{ maxWidth: "100%" }} src="/images/aboutHead1.jpg"></img>
                    </Grid>

                    <Grid item md={5} className={classes.gridItem + " " + classes.subFont} style={{ textAlign: "center" }}>
                        <h1 style={{ fontWeight: "600" }}>Sisters & Best Friends</h1>
                        <hr style={{ border: "1px solid #bc8f8f", backgroundColor: "#bc8f8f", }}>
                        </hr>
                        <h2>Twin sisters, Erin and Kelly, co-founded Rose & Liz after working corporate jobs for a few years after college
                            and finding that women were getting the short end of the stick in the laptop bag market.
                            Deciding that women deserved more than just skimpy laptop sleeves and pocket-less tote bags for work,
                            they set out to create their own vision of a practical, professional, and feminine work bag. </h2>
                    </Grid>
                </Grid>

                {/* Grid #2 - Erin */}
                <Grid
                    container
                    spacing={0}
                    justify="center"
                    alignItems="center"
                    style={{ minHeight: '60vh', backgroundColor: "#f1f2f3" }}
                >
                    <Grid item md={5} className={classes.gridItem + " " + classes.subFont} style={{ textAlign: "center" }}>
                        <h1>Erin <strong>[Rose]</strong> Donovan</h1>
                        <hr style={{ border: "1px solid #bc8f8f", backgroundColor: "#bc8f8f", }}>
                        </hr>
                        <h2>Erin worked at a large consulting firm and traveled frequently for work.
                            Every week on airplanes, she saw women traveling with large tote bags,
                            each stuffed with a sea of disorganized items and a laptop floating in the mess.
                            Finding a fashionable but practical laptop bag was impossible, with the most functional bags sold
                            in the Men's department.  Irritated by the lack of options for women,
                            she vented to her sister about the inequality and eventually channeled her frustration into product development. </h2>
                    </Grid>

                    <Grid item xs={11} md={5} className={classes.gridItem}>
                        <div style={{ maxHeight: "400px", width: "100%", overflow: "hidden" }}>
                            <img alt="Kelly and Erin as children." src="/images/erinD.jpg"></img>
                        </div>
                    </Grid>
                </Grid>

                {/* Grid #2 - Kelly */}
                <Grid
                    container
                    spacing={0}
                    justify="center"
                    alignItems="center"
                    style={{ minHeight: '60vh' }}
                >
                    <Grid item xs={11} md={5} className={classes.gridItem}>
                        <div style={{ maxHeight: "400px", width: "100%", overflow: "hidden" }}>
                            <img alt="Kelly and Erin as children." src="/images/kellyD.jpg"></img>
                        </div>
                    </Grid>

                    <Grid item md={5} className={classes.gridItem + " " + classes.subFont} style={{ textAlign: "center" }}>
                        <h1>Kelly E<strong>[liz]</strong>abeth Donovan</h1>
                        <hr style={{ border: "1px solid #bc8f8f", backgroundColor: "#bc8f8f", }}>
                        </hr>
                        <h2>Kelly worked in the finance industry and also ran a successful social media influencer account focused
                            on local restaurant happy hours.  Encouraged by her successful website and social media platform,
                            she decided to take her talents to a new and bigger project.
                            Seeing the same gap in the laptop bag market that Erin did, she was inspired to solve the problem.
                            After suggesting they start a bag business, Kelly and Erin immediately got to work and Rose & Liz was born. </h2>
                    </Grid>

                </Grid>
            </main>
        </div>
    )
}

export default withStyles(styles)(About);