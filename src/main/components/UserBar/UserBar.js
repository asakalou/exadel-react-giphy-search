import React from 'react';

export const UserBar = ({user, onLogout}) => {
    return (
        <div>
            <span>{user.email}</span>
            <button type="button" onClick={onLogout}>Logout</button>
        </div>
    );
};