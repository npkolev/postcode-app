import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from "react-router-dom";
import Routes from "./components/Routes";
import { Provider } from 'react-redux'
import ConfigureStore from "./store/ConfigureStore";

const store = ConfigureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div id="app-main-wrapper">
                <Routes />
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();









