import React, {Component} from 'react';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import RandomScene from "../scenes/Random/Random";
import HomeScene from "../scenes/Home/Home";
import NavItem from "../components/NavItem/NavItem";
import {connect} from "react-redux";
import Login from "../scenes/Login/Login";
import * as actions from './services/actions';

export class Main extends Component {

    componentDidMount() {
        this.props.onAppInit();
    }

    render() {
        const {user, loggedIn} = this.props;

        return (
            <div>
                <div className="app-header">
                    <div className="app-header__logo">
                        GIPHY Search
                    </div>
                    <ul className="app-header__navigation">
                        <li><NavItem to={'/random'}>Random</NavItem></li>
                        <li><NavItem to={'/home'}>Home</NavItem></li>
                        {!loggedIn ?
                            <li><NavItem to={'/login'}>Login</NavItem></li> : null
                        }
                    </ul>
                </div>

                <Switch>
                    <Route exact path="/" component={RandomScene}/>
                    <Route path={'/random'} component={RandomScene}/>
                    <Route path={'/home'} component={HomeScene}/> : null

                    {!loggedIn ?
                        <Route path={'/login'} component={Login}/> : null
                    }

                    <Redirect to={'/'}/>
                </Switch>
            </div>
        );

    }

}

const mapStateToProps = (state) => {
    const {user, loggedIn} = state.auth;

    return {
        user,
        loggedIn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAppInit: () => dispatch(actions.initApp())
    };
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Main)
);