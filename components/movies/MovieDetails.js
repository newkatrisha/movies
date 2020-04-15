import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { addMovie } from '../../store/actions/movieActions';
import { Link } from 'react-router-dom';


const MovieDetails = (props) => {
   
    const { movie, myMovies, id, auth } = props;
  
    const handleAdd = (e) => {
        e.preventDefault();
        props.addMovie(movie, id);
        console.log('added movie ' + movie.id);
    }

    let x = 0;
    myMovies && myMovies.forEach(e => {
        if(e.id === id) {
            x = 1
        }
    })
  

    const button = () => {
        if(!auth.uid) {
            return (
                <Link to='/login'>
                    <button className="ui yellow button">Save to My Movies</button>
                </Link>
            )
        } else if (x) {
            return null
        } return (
            <button id="myBtn" onClick={handleAdd} className="ui yellow button">Save to My Movies</button>
        )
    }
    
    if (movie) {
        console.log(movie);
        return (
            <div className="ui container">
                <div className="ui items">
                    <div className="item">
                        <div className="medium ui image">
                            <img alt="" src={movie.poster} />
                        </div>
                        <div className="content">
                            <div className="header">
                                <h1>{movie.title}</h1>
                            </div>
                            <div className="meta">
                                <b>{movie.genres.join(', ')}</b>
                            </div>
                            <div className="ui hidden divider"></div>
                            <div className="description" id="actors">
                            <p><b>Stars: </b> 
                             {movie.stars.join(', ')}</p>
                            </div>
                            <div className="ui hidden divider"></div>
                            <div className="description">
                                <p id="about">{movie.summary_text}</p>
                            </div>
                            <div className="extra">
                                {button()}
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        )
    } else {
        return (
            <div>
                {/* <p>Loading project</p> */}
                <div className="ui active centered inline loader"></div>
            </div>
        )
    }
    
}

const mapStateToProps = (state, ownProps) => {
    const auth = state.firebase.auth;
    const id = ownProps.match.params.id;
    const movies = state.firestore.data.movies_new;
    const myMovies = state.firebase.profile.movies;
    const movie = movies ? movies[id] : null;
    return {
        movie: movie,
        myMovies: myMovies,
        id: id,
        auth: auth
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        addMovie: (movie, id) => dispatch(addMovie(movie, id))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'movies_new' }
    ])
)(MovieDetails);
