import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            gender: '',
            email: '',
            password: '',
            movies: [],
            ratedMovies: []
        };
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        
        this.props.signUp(this.state);
        
    }
    render() {
        
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to='/' />

        return (
            <form onSubmit={this.handleSubmit} className="ui form container">
                <div className="field">
                    <label>First Name</label>
                    <input type="text" id="firstName" placeholder="" onChange={this.handleChange} />
                </div>
                <div className="field">
                    <label>Last Name</label>
                    <input type="text" id="lastName" placeholder="" onChange={this.handleChange} />
                </div>
                <div className="field">
                    <select className="ui dropdown" id="gender" onChange={this.handleChange}>
                        <option value="Unknown">Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div className="field">
                    <label>E-mail</label>
                    <input type="email" id="email" placeholder="" onChange={this.handleChange} />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="password" id="password" placeholder="" onChange={this.handleChange} />
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
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispacthToProps = (dispatch) => {
    return {
        // newUser = this.state
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispacthToProps)(SignUp);





