import React from 'react';
import MovieSummary from './MovieSummary';
import { Link } from 'react-router-dom';


const MovieList = ({movies}) => {
    return (
        <div className="ui five column grid"> 
            { movies && movies.map(movie => {
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

export default MovieList;
