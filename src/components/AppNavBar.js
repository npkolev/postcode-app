import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import {NavLink} from "react-router-dom";

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
        textAlign: 'center'
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    navButton: {
        color: "#fff",
        textDecoration: "none",
        textTransform: "uppercase"
    }
};

const AppNavBar = props => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <NavLink className={classes.navButton} to='/'>
                        <HomeIcon/>
                    </NavLink>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        Postcode Search App
                    </Typography>
                    <NavLink className={classes.navButton} to='/search'>
                        <FindInPageIcon/>
                    </NavLink>
                </Toolbar>
            </AppBar>
        </div>
    );
}

AppNavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppNavBar);
