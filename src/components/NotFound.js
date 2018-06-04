import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/es/Button/Button";
import {NavLink} from "react-router-dom";

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        textAlign: "center",
    }),
    typoGutter: {
        marginBottom: 25
    },
    navButtonStyle: {
        textDecoration: "none"
    }
});

const NotFound = props => {
    const { classes } = props;
    return (
        <div>
            <Paper className={classes.root} elevation={4}>
                <Typography variant="headline" component="h3">
                    404 - Page Not Found
                </Typography>
                <Typography component="p" className={classes.typoGutter}>
                    Please check the URL
                </Typography>
                <NavLink to='/' className={classes.navButtonStyle}>
                    <Button variant="raised" color="primary">
                        Back
                    </Button>
                </NavLink>
            </Paper>
        </div>
    );
}

NotFound.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NotFound);