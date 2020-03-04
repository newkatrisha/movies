import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Movies = (props) => {
    const onAddClick = (e) => {
        e.preventDefault();
        props.addMovie(props.movie, props.movie.id);
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
        <i onClick={onDeleteClick} className="right floated trash alternate icon"></i> :
        <i onClick={onAddClick} className="right floated star icon"></i>
    console.log(props.movie)
    return (
        <Link to={'/movies/' + props.movie.id }>
            <div className="ui card" style={{height: '100%'}}>
                <div className="image">
                    <img alt="" src={props.movie.poster} />
                </div>
                <div className="content">
                    <div className="header">{props.movie.title}</div>
                </div>
                <div className="extra content">
                    <span>
                        <b>{props.movie.rating_imdb}</b>
                    </span>
                   {button}
                </div>
            </div>
        </Link>
    )
}



export default Movies;