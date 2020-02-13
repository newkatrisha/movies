import React, { Component } from 'react';
import MovieList from '../../components/movies/MovieList';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getMovies } from '../../selectors';
 

class AllMovies extends Component {
    render() {
        console.log('allmovies');
        const {movies, myMovies, auth} = this.props;
        return (
            <div className="ui container">
                <MovieList movies={movies} myMovies={myMovies} key={auth.uid}/>
            </div>  
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: getMovies(state),
        myMovies: state.firebase.profile.movies,
        auth: state.firebase.profile
   }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'movies_new' }
    ])
)(AllMovies);