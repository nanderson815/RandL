import React from 'react';
import Container from '@material-ui/core/Container';

const AboutContainer = (props) => {
    ({ alt, desc, img, title } = { props })
    if (props.imgSide === "left") {
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
                        <img alt={alt} style={{ maxWidth: "100%" }} src={img}></img>
                    </Grid>

                    <Grid item md={6} className={classes.gridItem + " " + classes.subFont} style={{ textAlign: "center" }}>
                        {title}
                        <hr style={{ border: "1px solid #bc8f8f", backgroundColor: "#bc8f8f", }}>
                        </hr>
                        <h2>{desc}</h2>
                    </Grid>
                </Grid>
            </Container>
        )
    } else {
        <Container
            maxWidth="xl"
            style={{ backgroundColor: "#f1f2f3" }}
        >
            <Grid
                container
                spacing={0}
                justify="center"
                alignItems="center"
                style={{ minHeight: '60vh', backgroundColor: "#f1f2f3" }}
            >
                <Grid item md={6} className={classes.gridItem + " " + classes.subFont} style={{ textAlign: "center" }}>
                    {title}
                    <hr style={{ border: "1px solid #bc8f8f", backgroundColor: "#bc8f8f", }}>
                    </hr>
                    <h2>{desc}</h2>
                </Grid>

                <Grid item xs={12} md={6} className={classes.gridItem}>
                    <div style={{ maxHeight: "400px", width: "100%", overflow: "hidden" }}>
                        <img alt={alt} src={img}></img>
                    </div>
                </Grid>
            </Grid>
        </Container>
    }

}

export default AboutContainer;