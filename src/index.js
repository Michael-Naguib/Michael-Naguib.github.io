import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import ParticleSimulation from "./ParticleSimulation.js";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Error(){
    return(<div>ERROR</div>);
}
//UPDATE: I wanted to make this a multipage site ... react router acomplish that ... site pages
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact/>
            <Route path="/Demos" component={ParticleSimulation}/>
            <Route component={Error}/>
        </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);

/*
*   <React.StrictMode>
    <App />
  </React.StrictMode>,
* */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
