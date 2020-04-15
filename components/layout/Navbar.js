import React from 'react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import SearchFilter from './SearchFilter';

const Navbar = (props) => {
    console.log('navbar', props.auth);
    const { auth, profile } = props;
    const links = auth.uid ? <SignedInLinks auth={auth} profile={profile} /> : <SignedOutLinks />
    return (
        <div className="ui inverted segment">
            <div id="navbar" className="ui inverted top fixed borderless menu">
                <a href='/all' className="item">
                    <i className="video icon" />
                </a>
                <a className="item">
                    <SearchFilter />
                </a>
                <a href="/" className="item">Rate</a>
                { links }
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);