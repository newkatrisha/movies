import React from 'react';
import { NavLink } from 'react-router-dom'; 

const SignedOutLinks = () => {
    return (
        <div className="ui secondary menu">
            <div className="item">
                <NavLink to='/signup'>Signup</NavLink>
            </div>
            <div className="item">
                <NavLink to='/login'>Login</NavLink>
            </div>
        </div>
    );
}

export default SignedOutLinks;