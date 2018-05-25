import React, {Component} from 'react';
import {connect} from "react-redux";

class Login extends Component {

    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        };
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.stopPropagation();

        this.props.onLogin(this.state.username, this.state.password);
    }

    render() {
        const {loading, error} = this.props;

        return (
            <div>
                <h1>Login</h1>

                {loading ? 'Loading' : null}
                {error ? error : null}

                <form onSubmit={this.handleSubmit}>

                    <div>
                        <input value={this.state.username}
                               onChange={this.handleUsernameChange}/>
                    </div>

                    <div>
                        <input value={this.state.password}
                               type="password"
                               onChange={this.handlePasswordChange}/>
                    </div>

                    <button type="submit">Login</button>

                </form>

            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (state) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);