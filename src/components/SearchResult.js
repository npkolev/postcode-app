import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/es/Button/Button";
import {NavLink} from "react-router-dom";
import AppNavBar from "./AppNavBar";
import React, { Component } from 'react';
import '../App.css';
import TextField from "@material-ui/core/TextField";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import InitialState from "../InitialState";
import { connect } from 'react-redux'
import {bindActionCreators} from "redux";
import * as PostcodeAction from "../actions/PostcodeAction";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

class SearchResult extends Component {
    render() {
        console.log(this.props.postcode.nearest.data)
        const { data } = this.props.postcode.data;
        // const { nearest } = this.props.postcode.nearest.data;

        const test = [
            {postcode: "CB1 9TN"},
            {postcode: "SG4 0DU"},
            {postcode: "N12 8RT"},
            {postcode: "N12 9LE"}
        ];

        return (
            <div>
                <AppNavBar/>
                <Paper className="root" elevation={4}>
                    <List className="rootList" subheader={<li />}>
                            <li className="listSection">
                                <ul className="ul">
                                    <ListSubheader>{`Country and region for postcode ${data ? data.postcode : ''}`}</ListSubheader>
                                    <ListItem>
                                        <ListItemText primary={`Country: ${data ? data.country : ''}`} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={`Region: ${data ? data.region : ''}`} />
                                    </ListItem>
                                </ul>
                            </li>
                    </List>
                    <List className="rootList" subheader={<li />}>
                        <li className="listSection">
                            <ul className="ul">
                                <ListSubheader>{`Nearest postcodes for ${data ? data.postcode : ''}`}</ListSubheader>
                                {this.props.postcode.nearest.data ? this.props.postcode.nearest.data.map((item, index) => (
                                    <ListItem key={index}>
                                        <ListItemText primary={`Postcode: ${item.postcode}`} />
                                    </ListItem>
                                )): null}
                            </ul>
                        </li>
                    </List>
                    <NavLink to='/' className="navButtonStyle">
                        <Button variant="raised" color="primary">
                            Back
                        </Button>
                    </NavLink>
                </Paper>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        postcode: state.postcode
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(PostcodeAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult)

