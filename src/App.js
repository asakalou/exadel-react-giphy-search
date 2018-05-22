import React, {Component, Fragment} from 'react';
import './App.css';
import RandomScene from "./scenes/Random/Random";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import HomeScene from "./scenes/Home/Home";
import NavItem from "./components/NavItem/NavItem";

class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="App">

                <BrowserRouter>

                    <Fragment>
                        <ol>
                            <li><NavItem to={'/random'}>Random</NavItem></li>
                            <li><NavItem to={'/home'}>Home</NavItem></li>
                        </ol>

                        <Switch>
                            <Route exact path="/" component={RandomScene}/>
                            <Route path={'/random'} component={RandomScene}/>
                            <Route path={'/home'} component={HomeScene}/> : null

                            <Redirect to={'/'}/>
                        </Switch>
                    </Fragment>

                </BrowserRouter>

            </div>
        );
    }
}

export default App;
