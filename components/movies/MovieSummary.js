import React from 'react';
import { connect } from 'react-redux';
import { likeMovie, dislikeMovie } from '../../store/actions/movieActions';


const MovieSummary = (props) => {
  
    const onLikeClick = (e, state) => {
        e.preventDefault();
        props.likeMovie(props.movie);  
    }

    const onDislikeClick = (e) => {
        e.preventDefault();
        props.dislikeMovie(props.movie)
        console.log(props.movie)
    }
 
    let x = 0;
    props.ratedMovies && props.ratedMovies.forEach(e => {
        if(e.id === props.movie.id) {
            x = 1
        }
    })

    const buttonLike = 
        x ? 
        null :
        <div className="ui buttons">
        <button onClick={onLikeClick} className="ui green button"><i className="thumbs up icon"></i></button>
        <div className="or"></div>
        <button onClick={onDislikeClick} className="ui red button"><i className="thumbs down icon"></i></button>
        </div>
    
    return (
        <div className="ui fluid card">
            <div className="image">
                <img alt="" src={props.movie.poster} />
            </div>
            <div className="content">
                <div className="header">{props.movie.title}</div>
            </div>
                {buttonLike}
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
        likeMovie: (movie) => dispatch(likeMovie(movie)),
        dislikeMovie: (movie) => dispatch(dislikeMovie(movie))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieSummary);

