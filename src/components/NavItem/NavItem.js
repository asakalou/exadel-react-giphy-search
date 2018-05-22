import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

const NavItem = withRouter(({match, location, history, to, children}) => {
    const onClick = (event) => {
        history.push(to)
    };
    const isActive = location.pathname === to;
    return (
        <button
            className={isActive ? 'active' : null}
            onClick={onClick}>{children}</button>
    );
});

export default NavItem;
