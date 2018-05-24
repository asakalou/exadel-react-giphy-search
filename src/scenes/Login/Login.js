import React, {Component} from 'react';
import {connect} from "react-redux";

class Login extends Component {

    render() {
        return (
            <div>
                Login
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