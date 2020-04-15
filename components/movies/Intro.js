import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Intro = (props) => {
    console.log('intro');
    return (
        <div  className="ui container">
            <div id="rate" className="ui placeholder segment">
                <div className="ui icon header">
                    Let's see what movies you like!
                </div>
                {props.auth.uid ?
                <Link to='/rate'>
                <div className="ui button">Rate movies</div>
                </Link> :
                <Link to='/login'>
                <div className="ui button">Rate movies</div>
                </Link> }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Intro);