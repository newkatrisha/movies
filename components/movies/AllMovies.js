import React, { Component } from 'react';
import MovieList from './MovieList';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getMovies } from '../../selectors';
 

class AllMovies extends Component {
    render() {
        const { auth } = this.props; 
        const {movies} = this.props;
        return (
            <div>
                <h1>All Movies</h1>
                <MovieList movies={movies} key={auth.uid}/>
            </div>                   
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: getMovies(state),
        auth: state.firebase.profile
   }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'movies_new' }
    ])
)(AllMovies);