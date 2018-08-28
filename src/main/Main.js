import React, {Component, Fragment} from 'react';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import RandomScene from "../scenes/Random/Random";
import HomeScene from "../scenes/Home/Home";
import NavItem from "../components/NavItem/NavItem";
import {connect} from "react-redux";
import LoginScene from '../scenes/Auth/Login/Login';
import UserInfo from './components/UserInfo/UserInfo';

const AuthCheck = ({loggedIn, children}) => {
    return (
        <Fragment>
            {loggedIn &&
                children
            }
        </Fragment>
    );
}

const AuthCheckContainer = connect(
    (state) => {
        const {loggedIn, user} = state.auth;
        return {loggedIn, user};
    }, null
)(AuthCheck);



export class Main extends Component {

    render() {
        const {loggedIn} = this.props;

        return (
            <div>

                <div className="app-header">
                    <div className="app-header__logo">
                        GIPHY Search
                    </div>
                    <ul className="app-header__navigation">
                        <li><NavItem to={'/'}>Home</NavItem></li>
                        <li><NavItem to={'/random'}>Random</NavItem></li>


                        {!loggedIn &&
                            <li><NavItem to={'/login'}>Login</NavItem></li>
                        }

                    </ul>

                    <AuthCheckContainer>
                        <UserInfo/>
                    </AuthCheckContainer>

                </div>

                <Switch>
                    <Route exact path="/" component={HomeScene}/>
                    <Route path={'/random'} component={RandomScene}/>

                    {!loggedIn &&
                        <Route path={'/login'} component={LoginScene}/>
                    }

                    <Redirect to={'/random'}/>
                </Switch>
            </div>
        );

    }

}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.auth.loggedIn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Main)
);