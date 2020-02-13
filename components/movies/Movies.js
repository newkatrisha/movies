import React from 'react';
import { connect } from 'react-redux';
import { addMovie, deleteMovie } from '../../store/actions/movieActions';


const Movies = (props) => {
    console.log('list of movies')
    const onAddClick = (e) => {
        e.preventDefault();
        props.addMovie(props.movie);
    }
    const onDeleteClick = (e) => {
        e.preventDefault();
        props.deleteMovie(props.movie);
    }

    let exists = 0;
    props.userMovies && props.userMovies.forEach(element => {
        if (props.movie.id === element.id){
            exists = 1;
        }
    });

   const button = 
        exists ?
        // null in place of grey button could work
        <button className="ui grey button" onClick={onDeleteClick}><i className="star outline icon"></i>Remove</button> :
        <button className="ui yellow button" onClick={onAddClick}><i className="star icon"></i>Save</button>

    return (
        <div className="ui card" style={{height: '100%'}}>
            <div className="image">
                <img alt="" src={props.movie.poster} />
            </div>
            <div className="content">
                <div className="header">{props.movie.title}</div>
            </div>
            {button}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        userMovies: state.firebase.profile.movies,
        ratedMovies: state.firebase.profile.ratedMovies
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        addMovie: (movie) => dispatch(addMovie(movie)),
        deleteMovie: (movie) => dispatch(deleteMovie(movie))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);