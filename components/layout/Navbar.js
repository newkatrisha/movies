import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import SearchFilter from './SearchFilter';

const Navbar = (props) => {
    const { auth } = props;
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />
    return (

        <div id="navbar" className="ui secondary menu">
            <div className="item">
                <Link to='/'>
                    <i className="video icon" />
                </Link>
            </div>
            <div className="item">
                <SearchFilter />
            </div>
            { links }
        </div>
        
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);