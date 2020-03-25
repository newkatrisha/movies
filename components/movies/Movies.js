import React from 'react';
import { Link } from 'react-router-dom';


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

   const extra = () => {
       console.log(props.movie);
       if(!props.auth.uid) {
           return null
       } else if(exists) {
           return  (
               <div className="extra content">
               <b>{props.movie.rating_imdb}</b>/10
               <i onClick={onDeleteClick} className="right floated trash alternate icon"></i>
               </div>
           )      
       } return (
           <div className="extra content">
               <b>{props.movie.rating_imdb}</b>/10
           <i onClick={onAddClick} className="right floated star icon"></i>
           </div>
       )
   }

    return (
        <Link to={'/movies/' + props.movie.id }>
            <div className="ui card" style={{height: '100%'}}>
                <div className="image">
                    <img alt="" src={props.movie.poster} />
                </div>
                <div className="content">
                    <div className="header">{props.movie.title}</div>
                </div>
                {extra()}
            </div>
        </Link>
    )
}



export default Movies;