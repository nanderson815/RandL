import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    background: {
        backgroundColor: "blue",
        minHeight: "50px"
    }
})

const Footer = (props) => {
    const { classes } = props;

    return (
        <footer className={classes.background}>

        </footer>
    )
}

export default withStyles(styles)(Footer);