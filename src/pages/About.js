import React from 'react';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    header: {
        height: "75vh",
        background: "url('/images/aboutHead1.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%"
    }
});

const About = (props) => {
    const { classes } = props;

    return (
        <div>
            <header className={classes.header}>

            </header>
        </div>
    )
}

export default withStyles(styles)(About);