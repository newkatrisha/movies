import React, { useState } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

const LogIn  = (props) => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    
    const handleChange = (e) => {
        setUser({
            ...user, 
            [e.target.id]: e.target.value
         });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.logIn(user);
    }
    
    

        if (props.auth.uid) {
            return <Redirect to='/' />
        }
        return (
            <form onSubmit={handleSubmit} className="ui form container">
                <div className="field">
                    <label>E-mail</label>
                    <input type="email" value={user.email} id="email" onChange={handleChange} />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="password" value={user.password} id="password" onChange={handleChange} />
                </div>
                { props.authError ? 
                    <div className="ui negative floating message">
                        <h4>Login Error</h4>
                    </div> : null }
                <button className="ui blue button" type="submit">Submit</button>
                <div className="ui compact message">
                    <i className="icon help" />
                    Don't have a profile? <a href="/signup">Signup here</a>
                </div> 
            </form>
            
        )
    }

const mapStateToProps = (state) => {
    console.log(state)
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (creds) => dispatch(logIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
