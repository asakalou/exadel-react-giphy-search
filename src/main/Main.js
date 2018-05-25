import React, {Component} from 'react';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import RandomScene from "../scenes/Random/Random";
import HomeScene from "../scenes/Home/Home";
import NavItem from "../components/NavItem/NavItem";
import {connect} from "react-redux";
import Login from "../scenes/Login/Login";
import * as actions from './services/actions';
import * as authActions from '../scenes/Login/services/actions';
import {UserBar} from "./components/UserBar/UserBar";
import FavouritesScene from "../scenes/Favourites/Favourites";

export class Main extends Component {

    componentDidMount() {
        this.props.onAppInit();
    }

    handleLogout = () => {
        this.props.onLogout();
    }

    render() {
        const {user, loggedIn, initializing, error} = this.props;

        if (error) {
            return <div>{error}</div>;
        }

        return (
            <div>
                {initializing ? 'Loading!' : null}

                <div className="app-header">
                    <div className="app-header__logo">
                        GIPHY Search
                    </div>
                    <ul className="app-header__navigation">
                        <li><NavItem to={'/random'}>Random</NavItem></li>
                        <li><NavItem to={'/home'}>Home</NavItem></li>

                        {loggedIn ?
                            <li><NavItem to={'/favourites'}>Favourites</NavItem></li> : null
                        }

                        {!loggedIn && !initializing ?
                            <li><NavItem to={'/login'}>Login</NavItem></li> : null
                        }
                    </ul>
                    {loggedIn ?
                        <UserBar user={user} onLogout={this.handleLogout}/> : null
                    }

                </div>

                <Switch>
                    <Route exact path="/" component={RandomScene}/>
                    <Route path={'/random'} component={RandomScene}/>
                    <Route path={'/home'} component={HomeScene}/> : null

                    {loggedIn ?
                        <Route path={'/favourites'} component={FavouritesScene}/> : null
                    }

                    {!loggedIn && !initializing ?
                        <Route path={'/login'} component={Login}/> : null
                    }

                    <Redirect to={'/random'}/>
                </Switch>
            </div>
        );

    }

}

const mapStateToProps = (state) => {
    const {user, loggedIn} = state.auth;
    const {initializing, error} = state.main;

    return {
        user,
        loggedIn,
        initializing,
        error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAppInit: () => dispatch(actions.initApp()),
        onLogout: () => dispatch(authActions.logout())
    };
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Main)
);