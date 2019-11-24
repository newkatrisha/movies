import React from 'react';
import { NavLink } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { logOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {
    return (
        <div className="ui secondary menu">
            <div className="item">
                <NavLink to="/mylist">My Movies</NavLink>
            </div>
            <div className="item">
                <a href="/" onClick={props.logOut}>Log Out</a>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch(logOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);