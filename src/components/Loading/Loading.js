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
        >
            <Grid item>
                <img className="fe-pulse" atl="loding icon" src="/images/rlSript.png" style={{ height: "75px", width: "auto" }}></img>
            </Grid>
        </Grid>
    )
}

export default Loading;