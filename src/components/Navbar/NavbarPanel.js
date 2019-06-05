import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";


const styles = theme => ({
    root: {
        width: '100%',
        minHeight: "200px",
        backgroundColor: "#f1f2f3"
    },
    text: {
        color: "black",
        textAlign: "center",
    },
    cont: {
        margin: "0"
    },
    image: {
        maxHeight: "275px",
        marginLeft: "auto",
        marginRight: "auto",
        display: "block"
    }
});

function NavbarPanel(props) {
    const { classes, close } = props;

    const products = props.products.slice(0, 2).map((product, index) =>
        <Grid item md={4} key={index}>
            <Link to="/shop" onClick={close} style={{ textDecoration: 'none' }}>
                <h2 className={classes.text}>{product ? product.node.title : null}</h2>
                <img className={classes.image} src={product ? product.node.images.edges[0].node.src : null} alt={product ? product.node.title : null} />
                <h3 className={classes.text}>{product ? product.node.description : null}</h3>
            </Link>
        </Grid>
    )


    return (
        <Collapse in={props.isOpen} >
            <div className={classes.root}>
                <br></br>
                <h1 className={classes.text}>Our Bags</h1>
                <Grid className={classes.cont} container spacing={2}>

                    {products}

                    <Grid item md={3}>
                        <h1 className={classes.text}>We have more bags in the works! Stay tuned for more of our desings.</h1>
                        <br></br>
                        <h2 className={classes.text}>Yours Truly,</h2>
                        <img alt="rose and liz signature" className={classes.image} style={{ height: "40px", width: "auto" }} src="/images/rlSript.png"></img>
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
