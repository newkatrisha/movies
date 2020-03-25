import React, { Component } from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Movies from './Movies';
import { Link } from 'react-router-dom';
import { addMovie, deleteMovie } from '../../store/actions/movieActions';

class MyMovies extends Component {
    render() {
        const { myMovies, auth, addMovie, deleteMovie } = this.props;
        console.log(myMovies);
        if (!auth.uid) return <Redirect to='/' />
        else if(!myMovies) {
            return null
        } else if(myMovies.length === 0) {
            return(
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
        } return (
                <div className="ui container">
                    <div className="ui five column grid"> 
                        { myMovies && myMovies.map(movie => {
                            console.log(movie)
                            return (
                                <div className="column">
                                    <Movies 
                                        movie={movie} 
                                        userMovies={myMovies} 
                                        addMovie={addMovie}
                                        deleteMovie={deleteMovie}
                                        key={movie.id} 
                                        auth={auth} 
                                    />
                                </div>
                            )
                        })}
                    </div> 
                </div>
            )
        }
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    return {
        auth: state.firebase.auth,
        myMovies: state.firebase.profile.movies
   }
}

const mapDispatchToProps = (dispatch) => {
    console.log('in dispatch')
    return { 
        addMovie: (movie) => dispatch(addMovie(movie)),
        deleteMovie: (movie) => dispatch(deleteMovie(movie))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'users' }
    ])
)(MyMovies);


