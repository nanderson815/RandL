import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'
import { Link } from "react-router-dom";
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';
import Grid from '@material-ui/core/Grid';
import NavbarPanel from "./NavbarPanel";
import NavDrawer from "./NavbarDrawer";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { withRouter } from 'react-router-dom';

import './Navbar.css';
import { AUTH_TOKEN } from '../../Constants';


const styles = {
    color: {
        backgroundColor: "transparent",
        color: "white",
        boxShadow: "none"
    },
    scrolled: {
        backgroundColor: "#58646D",
        transition: "background-color 0.35s ease",
        color: "white",
    },
    center: {
        textAlign: "center"
    },
    inline: {
        display: "inline-block"
    }
};


function NavBar(props) {
    const { classes } = props;
    const authToken = sessionStorage.getItem(AUTH_TOKEN);

    let navbarClass = ''
    if (props.isTop && props.history.location.pathname === "/") {
        navbarClass = classes.color
    } else {
        navbarClass = classes.scrolled
    }

    const mobileMenu =
        <Grid item md className={classes.center}>
            <NavDrawer />
        </Grid>


    const deskMenu =
        <Grid item md className={classes.center}>
            <Button size="large" color="inherit" onClick={props.toggle}>
                <span className="headerBtn">Shop {props.isOpen ? <ExpandLessIcon className="btnIcon" /> : <ExpandMoreIcon className="btnIcon" />}</span>
            </Button>

            <Link className="headerLink" to="/about" onClick={props.close}>
                <Button size="large" color="inherit"><span className="headerBtn">About</span></Button>
            </Link>

            <Link className="headerLink" to="/" onClick={props.close}>
                <Button size="large" color="inherit"><span className="headerBtn">Home</span></Button>
            </Link>
        </Grid>

    return (
        <div>
            <AppBar className={`${navbarClass} navBar`} position="fixed">
                <Toolbar>
                    <Grid
                        justify="space-around"
                        alignItems="center"
                        direction="row"
                        container
                        spacing={24}
                    >

                        {props.isMobile ? mobileMenu : deskMenu}

                        <Grid item md className={classes.center}>
                            <Link className="headerLink" to="/" onClick={props.close}>
                                <img className={`${classes.inline} headerLogo`} src="./images/r6.png" alt="Rose and Liz Logo" />
                            </Link>
                        </Grid>

                        <Grid item md className={classes.center}>

                            {authToken ?
                                <Link className="headerLink" to="/account" onClick={props.close}>
                                    <Button size="large" color="inherit"><span className="headerBtn">Account</span></Button>
                                </Link>
                                :
                                <Link className="headerLink" to="/login" onClick={props.close}>
                                    <Button size="large" color="inherit"><span className="headerBtn">Login</span></Button>
                                </Link>
                            }

                            <IconButton color="inherit" onClick={props.click}> <ShoppingCartOutlined /> </IconButton>
                        </Grid>

                    </Grid>
                </Toolbar>
                <NavbarPanel isOpen={props.isOpen} products={props.products} />
            </AppBar>
        </div >
    );
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(NavBar));
