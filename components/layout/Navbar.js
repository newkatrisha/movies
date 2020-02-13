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
            <div id="navbar" className="ui inverted top fixed borderless menu ">
                <a href='/all' className="item">
                    <i className="video icon" />
                </a>
                <a className="item">
                    <SearchFilter />
                </a>
                { links }
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        myMovies: state.firebase.profile.movies
    }
}

export default connect(mapStateToProps)(Navbar);