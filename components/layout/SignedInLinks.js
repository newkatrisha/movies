import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../store/actions/authActions';


const SignedInLinks = (props) => {
    return (
        <div className="ui secondary menu">
            <a className="item" href="/mylist">My Movies</a>
            <a className="item" href="/" onClick={props.logOut}>Log Out</a>
        </div>
    )
} 

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch(logOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);