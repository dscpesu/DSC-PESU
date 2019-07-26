import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import './index.css';
import App from './App';
import Projects from './Projects';
import Login from './Login';
import WGallery from './Gallery';
import * as serviceWorker from './serviceWorker';

function AppRouter() {
    return (
        <Router>
            <div>
                <Route path="/" exact component={App} />
                <Route path="/projects/" component={Projects} />
                <Route path="/login/" component={Login} />
                <Route path="/gallery/" component={WGallery} />
            </div>
        </Router>
    );
}

ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
