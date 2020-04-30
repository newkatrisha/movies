import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';

function SignUp (props) {
    
    const [ profile, setProfile ] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        email: '',
        password: '',
        movies: [],
        ratedMovies: []
    })
    
    const handleChange = (e) => {
        setProfile({
            ...profile,
            [e.target.id]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.signUp(profile);
    }
       
    const { auth, authError } = props;

    
    return (
        auth.uid ? <Redirect to='/' /> :

        <form onSubmit={handleSubmit} className="ui form container">
            <div className="field">
                <label>First Name</label>
                <input type="text" value={profile.firstName} id="firstName" placeholder="" onChange={handleChange} />
            </div>
            <div className="field">
                <label>Last Name</label>
                <input type="text" value={profile.lastName} id="lastName" placeholder="" onChange={handleChange} />
            </div>
            <div className="field">
                <select className="ui dropdown" value={profile.gender} id="gender" onChange={handleChange}>
                    <option value="Unknown">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            <div className="field">
                <label>E-mail</label>
                <input type="email" value={profile.email} id="email" placeholder="" onChange={handleChange} />
            </div>
            <div className="field">
                <label>Password</label>
                <input type="password" value={profile.password} id="password" placeholder="" onChange={handleChange} />
            </div>
                { authError ? 
                    <div className="ui negative message">
                        <div className="header">
                            Signup Error
                        </div>
                        <p>{authError}</p> 
                    </div> : 
                    null 
                }
            <button className="ui blue button" type="submit">Sign up</button> 
        </form>    
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispacthToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispacthToProps)(SignUp);





