import React from 'react';
import Grid from '@material-ui/core/Grid';


const PageBreak = (props) => {
    return (
        <Grid
            container
            justify="center"
            alignItems="center"
            style={{ marginTop: "-25px" }}
        >
            <Grid item>
                <img style={{ height: "50px", width: "auto" }} src="/images/rlSript.png" ></img>
            </Grid>
        </Grid>
    )
}

export default PageBreak;