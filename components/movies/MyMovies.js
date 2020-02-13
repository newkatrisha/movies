import React, { Component } from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Movies from './Movies';
import { Link } from 'react-router-dom';

class MyMovies extends Component {

    render() {
        console.log('my movies');
        const { myMovies, auth } = this.props;
        if (!auth.uid) return <Redirect to='/' />
        else if(myMovies && !myMovies.length) {
            return (
                <div className="ui container">
                    <div className="ui placeholder segment">
                        <div className="ui icon header">
                            <i className="film icon"></i>
                            There are no movies in your list yet
                        </div>
                        <Link to='/all'>
                            <button className="ui button">Add Movies</button>
                        </Link>
                    </div>
                </div>
            )
        }
        return (
            <div className="ui container">
                <div className="ui five column grid"> 
                    { myMovies && myMovies.map(movie => {
                        return (
                            <div className="column">
                                <Link to={'/movies/' + movie.id }>
                                    <Movies movie={movie} key={movie.id}  />
                                </Link>
                            </div>
                        )
                    })}
                </div>    
            </div>                
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        myMovies: state.firebase.profile.movies
   }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'users' }
    ])
)(MyMovies);
