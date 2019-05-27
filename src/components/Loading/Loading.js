import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Loading.css';

const Loading = () => {
    return (
        <Grid
            container
            spacing={0}
            justify="center"
            alignItems="center"
            style={{minHeight: "100vh"}}
        >
            <Grid item>
                <img className="fe-pulse" alt="loding icon" src="/images/rlSript.png" style={{ height: "75px", width: "auto" }}></img>
            </Grid>
        </Grid>
    )
}

export default Loading;