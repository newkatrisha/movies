import React, { Component } from 'react';
import MovieList from './MovieList';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import MovieSummary from './MovieSummary';
import { Link } from 'react-router-dom';

class MyMovies extends Component {
    render() {
        const { myMovies, auth } = this.props;
        if (!auth.uid) return <Redirect to='/' />
        return (
            <div className="ui five column grid"> 
                { myMovies && myMovies.map(movie => {
                    return (
                        <div className="column">
                            <Link to={'/movies/' + movie.id }>
                                <MovieSummary movie={movie} key={movie.id}  />
                            </Link>
                        </div>
                    )
                })}
            </div>                    
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
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
