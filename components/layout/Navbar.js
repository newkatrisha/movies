import React from 'react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import SearchFilter from './SearchFilter';

const Navbar = (props) => {
    console.log('navbar');
    const { auth } = props;
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />
    return (
        <div className="ui inverted segment">
            <div id="navbar" className="ui top fixed borderless menu ">
                <a href='/' className="item">
                    <i className="video icon" />
                </a>
                <a className="item">
                    <SearchFilter />
                </a>
                <a href="/all" className="item">Movies</a>
                { links }
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);