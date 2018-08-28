import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as authActions from '../../../scenes/Auth/services/actions';

const UserInfo = ({user, onLogout}) => {
    return (
        <div>
            {user.email}
            <button onClick={onLogout}>Logout</button>
        </div>
    );
};

export default connect(
    (state) => {
        const {user, loggedIn} = state.auth;
        return {user, loggedIn};
    },
    {
        onLogout: authActions.logout
    }
)(UserInfo);