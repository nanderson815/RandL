import React from 'react';

const Loading = () => {
    return (
        <Grid
            container
            spacing={0}
            justify="center"
            alignItems="center"
        >
            <Grid item>
                <img atl="loding icon" src="/images/rlSript.png" style={{ height: "75px", width: "auto" }}></img>
            </Grid>
        </Grid>
    )
}

export default Loading;