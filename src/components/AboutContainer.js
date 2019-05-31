import React from 'react';
import Container from '@material-ui/core/Container';

const AboutContainer = (props) => {
    return (
        <Container
            maxWidth="xl"
        >
            <Grid
                container
                spacing={0}
                justify="center"
                alignItems="center"
                style={{ minHeight: '60vh' }}
            >
                <Grid item xs={12} md={6} className={classes.gridItem}>
                    <img alt="Kelly and Erin as children." style={{ maxWidth: "100%" }} src="/images/aboutHead1.jpg"></img>
                </Grid>

                <Grid item md={6} className={classes.gridItem + " " + classes.subFont} style={{ textAlign: "center" }}>
                    <h1 style={{ fontWeight: "600" }}>Sisters & Best Friends</h1>
                    <hr style={{ border: "1px solid #bc8f8f", backgroundColor: "#bc8f8f", }}>
                    </hr>
                    <h2>Twin sisters, Erin and Kelly, co-founded Rose & Liz after working corporate jobs for a few years after college
                        and finding that women were getting the short end of the stick in the laptop bag market.
                        Deciding that women deserved more than just skimpy laptop sleeves and pocket-less tote bags for work,
                            they set out to create their own vision of a practical, professional, and feminine work bag. </h2>
                </Grid>
            </Grid>
        </Container>
    )
}

export default AboutContainer;