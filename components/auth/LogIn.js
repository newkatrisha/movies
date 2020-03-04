import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

class LogIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.logIn(this.state);
    }
    render() {
        const { authError } = this.props;
        if (this.props.auth.uid) {
            return <Redirect to='/' />
        }
        return (
            <form onSubmit={this.handleSubmit} className="ui form container">
                <div className="field">
                    <label>E-mail</label>
                    <input type="email" id="email" placeholder="" onChange={this.handleChange} />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="password" id="password" placeholder="" onChange={this.handleChange} />
                </div>
                <button className="ui blue button" type="submit">Submit</button>
                <div className="red-text">
                    { authError ? <p>{authError}</p> : null }
                </div>
                
                    <div className="ui compact message">
                    <i className="icon help"></i>
                    Don't have a profile? <a href="/signup">Signup here</a>
                    </div>
                
            </form>
            
        )
    }
}

const mapStateToProps = (state) => {
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
