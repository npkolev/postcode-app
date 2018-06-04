import React, { Component } from 'react';
import './App.css';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import {NavLink} from "react-router-dom";
import AppNavBar from "./components/AppNavBar";
import InitialState from "./InitialState";
import { connect } from 'react-redux'
import {bindActionCreators} from "redux";
import * as PostcodeAction from "./actions/PostcodeAction";
import BasicAutocomplete from './components/Downshift';



class App extends Component {
    constructor(props) {
        super(props);

        this.state = InitialState;
    }

    updateState = e => {
        this.setState({postcode: e.target.value});
        if(this.state.postcode) {
            this.props.actions.autocompletePostcode(this.state.postcode)
        }
    };

    getPostCode = e => {
        e.preventDefault()
        this.props.actions.searchPostcode(this.state.postcode, this.props.history)
        this.props.actions.searchNearestPostcodes(this.state.postcode)
    }

      render() {
        const { updateState, getPostCode } = this;
        const { postcode } = this.state;

        const { data } = this.props.postcode.autocomplete;

        return (
          <div className="App">
            <AppNavBar/>
            <form className="container">
              <TextField
                  id="search"
                  label="Enter postcode"
                  type="search"
                  className="textField"
                  onChange={updateState}
                  value={postcode}
                  margin="normal"
              />
                {/*<BasicAutocomplete*/}
                    {/*items={data}*/}
                    {/*value={postcode}*/}
                    {/*onChange={selectedItem => this.setState({postcode: selectedItem})}*/}

                {/*/>*/}
            </form>
            <NavLink to='/search' className="navButtonStyle">
              <Button className="searchButton" variant="raised" color="primary" onClick={getPostCode} type="submit">
                  Search
              </Button>
            </NavLink>
          </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(App)


