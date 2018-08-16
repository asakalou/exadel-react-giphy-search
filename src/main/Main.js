import React, {Component} from 'react';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import RandomScene from "../scenes/Random/Random";
import HomeScene from "../scenes/Home/Home";
import NavItem from "../components/NavItem/NavItem";
import {connect} from "react-redux";

export class Main extends Component {


    render() {

        return (
            <div>

                <div className="app-header">
                    <div className="app-header__logo">
                        GIPHY Search
                    </div>
                    <ul className="app-header__navigation">
                        <li><NavItem to={'/'}>Home</NavItem></li>
                        <li><NavItem to={'/random'}>Random</NavItem></li>
                    </ul>

                </div>

                <Switch>
                    <Route exact path="/" component={HomeScene}/>
                    <Route path={'/random'} component={RandomScene}/>
                    <Redirect to={'/random'}/>
                </Switch>
            </div>
        );

    }

}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Main)
);