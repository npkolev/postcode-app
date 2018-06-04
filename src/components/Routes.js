import React, { Component } from 'react'
import {Switch, Route, withRouter} from 'react-router-dom'
import NotFound from "./NotFound";
import SearchResult from "./SearchResult";
import App from "../App";

class Routes  extends Component {

    returnRoutes() {
        return(
            <Switch>
                <Route exact path='/' component={App}/>
                <Route path='/search' component={SearchResult}/>
                <Route component={NotFound}/>
            </Switch>
        )
    }

    render() {
        return (
            <main className="col-md-12 pt-4 px-4" role="main">
                {this.returnRoutes()}
            </main>
        )
    }
}


export default withRouter(Routes);



