import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuIcon from "@material-ui/icons/Menu";


const styles = {
    list: {
        width: 250,
    },
    white: {
        color: "white",
    }
};

class NavDrawer extends React.Component {
    state = {
        left: false
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                <List>
                 
                    <Link className="headerLink" to="/about" onClick={this.props.close}>
                        <ListItem button>
                            <ListItemIcon>  </ListItemIcon>
                            <ListItemText primary="About" />
                        </ListItem>
                    </Link>

                    <Link className="headerLink" to="/" onClick={this.props.close}>
                        <ListItem button>
                            <ListItemText primary="Home" />
                        </ListItem>
                    </Link>
                </List>
            </div>
        );

        return (
            <div>
                <Button className={classes.white} onClick={this.toggleDrawer('left', true)}><MenuIcon /> </Button>
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {sideList}
                    </div>
                </Drawer>
            </div>
        );
    }
}

NavDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavDrawer);
