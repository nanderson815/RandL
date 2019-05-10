import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
    root: {
        width: '100%',
        minHeight: "200px",
        backgroundColor: "#f1f2f3"
    },
    text: {
        color: "black",
        textAlign: "center"
    },
    cont: {
        margin: "0"
    }
});

function NavbarPanel(props) {
    const { classes } = props;

    const product = props.products[0];
    return (
        <Collapse in={props.isOpen} >
            <div className={classes.root}>
                <Grid className={classes.cont} container spacing={24}>
                    <Grid item md={3} >
                        <h1 className={classes.text}>Featured</h1>
                        <img src={product ? product.images[0].src : null} alt={product ? product.title : null} />
                        <h2 className={classes.text}>{product ? product.title : null}</h2>


                    </Grid>
                </Grid>
            </div>
        </Collapse>
    );
}

NavbarPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavbarPanel);
