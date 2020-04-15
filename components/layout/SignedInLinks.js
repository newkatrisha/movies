import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../store/actions/authActions';
import Boy from '../../avatars/boy-1.png';
import Girl from '../../avatars/girl-1.png';




const SignedInLinks = (props) => {
    console.log(props);
    
    const { name, gender, initials } = props.profile;
    const img = () => {
        if(gender === "Female") {
            return <img className="ui avatar image" src={Girl} />
        } else if (gender === "Male") {
            return <img className="ui avatar image" src={Boy} />
        } else return null
    }
        
    return (
        <div className="right menu">
            <a className="item" href={'/users/' + props.auth.uid}>
            {img()}
                {props.profile ? <p>My Profile</p> : null }
            </a>
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

