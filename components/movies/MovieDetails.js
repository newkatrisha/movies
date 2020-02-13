import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';


const MovieDetails = (props) => {
    console.log('movie details');
    const { movie } = props;
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
                                Additional Details
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
    const id = ownProps.match.params.id;
    const movies = state.firestore.data.movies_new;
    const movie = movies ? movies[id]: null;
    return {
        movie: movie
    }
} 

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'movies_new' }
    ])
)(MovieDetails);
