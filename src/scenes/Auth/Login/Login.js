import React, {Component} from 'react';
import {connect} from "react-redux";
import * as actions from '../services/actions';
import {Redirect} from 'react-router-dom';

export class LoginScene extends Component {

    state = {
        email: '',
        password: ''
    };

    handleFormFieldChange = (field, e) => {
        this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state.email, this.state.password);
    }

    render() {
        const {loggedIn, loading, error} = this.props;
        if (loggedIn) {
            return <Redirect to={'/'}/>;
        }

        return (
            <div className="login-scene">

                <form onSubmit={this.handleSubmit}>
                    <div>
                        Email:
                        <input
                            onChange={(e) => {this.handleFormFieldChange('email', e)}}
                        />
                    </div>
                    <div>
                        Password:
                        <input
                            onChange={(e) => {this.handleFormFieldChange('password', e)}}
                        />
                    </div>

                    <button type="submit">Login</button>
                </form>

                {loading ? <div className={'loading'}>Loading!</div> : null}
                {error ? <div className={'error'}>{error}</div> : null}

            </div>
        );
    }

}

const mapStateToProps = (state) => {
    const {user, loading, error, loggedIn} = state.auth;

    return {
        user,
        loading,
        error,
        loggedIn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => dispatch(actions.login(email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScene);