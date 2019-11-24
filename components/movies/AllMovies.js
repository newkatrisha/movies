import React, { Component } from 'react';
import MovieList from './MovieList';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';



class AllMovies extends Component {
    render() {
        const { movies, auth } = this.props;
        
        return (
            <div>
                <h1>All Movies</h1>
                <MovieList movies={movies}  />
            </div>                   
        )
    }
}


const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth,
        movies: state.firestore.ordered.movies
   }
}



export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'movies' }
    ])
)(AllMovies);