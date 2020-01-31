import React from 'react';
import { connect } from 'react-redux';
import { addMovie, deleteMovie, likeMovie, dislikeMovie } from '../../store/actions/movieActions';


const MovieSummary = (props) => {
    // console.log(props);
    const onAddClick = (e) => {
        e.preventDefault();
        props.addMovie(props.movie);
    }
    const onDeleteClick = (e) => {
        e.preventDefault();
        props.deleteMovie(props.movie);
    }

    const onLikeClick = (e) => {
        e.preventDefault();
        props.likeMovie(props.movie);
    }

    const onDislikeClick = (e) => {
        e.preventDefault();
        props.dislikeMovie(props.movie)
    }

    let exists = 0;
    props.userMovies && props.userMovies.forEach(element => {
        if (props.movie.id === element.id){
            exists = 1;
        }
    });

    let x = 0;
    props.ratedMovies && props.ratedMovies.forEach(e => {
        if(e.movie === props.movie.id && e.state === 1) {
            x = 1;
        }
    })
    
    const button = 
        exists ?
        <button className="ui red button" onClick={onDeleteClick}><i className="heart outline icon"></i></button> :
        <button className="ui green button" onClick={onAddClick}><i className="heart icon"></i></button>

    const buttonLike = 
        x ? 
        <button onClick={onDislikeClick} className="ui red button"> 
            <i className="thumbs down icon"></i>
        </button> :
        <button onClick={onLikeClick} className="ui green button">
            <i className="thumbs up icon"></i>
        </button> 

    return (
        <div className="ui fluid card">
            <div className="image">
                <img alt="" src={props.movie.poster} />
            </div>
            <div className="content">
                <a href="/" className="header">{props.movie.title} /</a>
            </div>
            <div className="extra content">
                { props.auth.uid ? button : null } 
                { props.auth.uid ? buttonLike : null }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        auth: state.firebase.auth,
        userMovies: state.firebase.profile.movies,
        ratedMovies: state.firebase.profile.ratedMovies
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        addMovie: (movie) => dispatch(addMovie(movie)),
        deleteMovie: (movie) => dispatch(deleteMovie(movie)),
        likeMovie: (movie) => dispatch(likeMovie(movie)),
        dislikeMovie: (movie) => dispatch(dislikeMovie(movie))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieSummary);

