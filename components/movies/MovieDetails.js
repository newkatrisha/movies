import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { addMovie } from '../../store/actions/movieActions';


const MovieDetails = (props) => {
   
    const { movie, myMovies, id } = props;
  
    const handleOnClick = (e) => {
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
  

    const button = 
    x ? null :
    <button id="myBtn" onClick={handleOnClick} className="ui yellow button">Save to My Movies</button>

    if (movie) {
        return (
            <div className="ui container">
                <div className="ui items">
                    <div className="item">
                        <div className="medium ui image">
                            <img alt="" src={movie.poster} />
                        </div>
                        <div className="top aligned content">
                            <h1>{movie.title}</h1>
                            <div className="description">
                                <p>{movie.summary_text}</p>
                            </div>
                            <div className="extra">
                                {button}
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
    console.log(ownProps);
    const id = ownProps.match.params.id;
    const movies = state.firestore.data.movies_new;
    const myMovies = state.firebase.profile.movies;
    const movie = movies ? movies[id] : null;
    return {
        movie: movie,
        myMovies: myMovies,
        id: id
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
