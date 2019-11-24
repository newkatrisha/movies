import React, { Component } from 'react';
import MovieList from './MovieList';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class MyMovies extends Component {
    render() {
        const { myMovies, auth } = this.props;
        if (!auth.uid) return <Redirect to='/' />
        return (
            <div>
                <h1>My Movies</h1>
                <MovieList movies={myMovies}  />
            </div>                   
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth,
        // movies: state.firestore.ordered.movies,
        myMovies: state.firebase.profile.movies
   }
}



export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'users' }
    ])
)(MyMovies);
