import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PageBreak from "../components/PageBreak";
import Container from '@material-ui/core/Container';
import AboutContainer from '../components/AboutContainer';

const styles = theme => ({
    header: {
        background: "#f1f2f3",
        margin: "50px 0px 0px 0px"
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
                    <Grid item style={{ textAlign: "center" }}>
                        <h1 className={classes.headerFont}>Our Story</h1>
                        <h2 className={classes.subFont}>Twin sisters on a mission to change the bag industry.</h2>
                    </Grid>
                </Grid>
            </header>

            <PageBreak />

            <main>
                {/* Grid #1 - Sisters and Best Friends */}
                <AboutContainer
                    imgSide="left"
                    alt="Kelly and Erin as children."
                    img="/images/aboutHead1.jpg"
                    title={<h1 style={{ fontWeight: "600" }}>Sisters & Best Friends</h1>}
                    desc="Twin sisters, Erin and Kelly, co-founded Rose & Liz after working corporate jobs for a few years after college
                                and finding that women were getting the short end of the stick in the laptop bag market.
                                Deciding that women deserved more than just skimpy laptop sleeves and pocket-less tote bags for work,
                            they set out to create their own vision of a practical, professional, and feminine work bag."
                ></AboutContainer>

                {/* Grid #2 - Erin */}
                <AboutContainer
                    alt="Erin Donovan"
                    img="/images/erinD.jpg"
                    title={<h1>Erin <strong>[Rose]</strong> Donovan</h1>}
                    desc="Erin worked at a large consulting firm and traveled frequently for work.
                                Every week on airplanes, she saw women traveling with large tote bags,
                                each stuffed with a sea of disorganized items and a laptop floating in the mess.
                                Finding a fashionable but practical laptop bag was impossible, with the most functional bags sold
                                in the Men's department.  Irritated by the lack of options for women,
                            she vented to her sister about the inequality and eventually channeled her frustration into product development."
                ></AboutContainer>

                {/* Grid #2 - Kelly */}
                <AboutContainer
                    imgSide="left"
                    alt="Kelly Donovan"
                    img="/images/kellyD.jpg"
                    title={<h1>Kelly E<strong>[liz]</strong>abeth Donovan</h1>}
                    desc="Kelly worked in the finance industry and also ran a successful social media influencer account focused
                                on local restaurant happy hours.  Encouraged by her successful website and social media platform,
                                she decided to take her talents to a new and bigger project.
                                Seeing the same gap in the laptop bag market that Erin did, she was inspired to solve the problem.
                            After suggesting they start a bag business, Kelly and Erin immediately got to work and Rose & Liz was born."
                ></AboutContainer>
            </main>
        </div>

    )
}

export default withStyles(styles)(About);