import React from 'react';
import MovieSummary from './MovieSummary';

const MovieList  = ({movies}) => {

    return (
        <div className="ui three column grid"> 
 
                    { movies && movies.map(movie => {
                        console.log(movie);
                        return (
                            
                                <div className="column">
                                <MovieSummary  movie={movie} key={movie.id}  />

                                </div>
                                
                            
                        )
                    })}
     
        </div>                   
    )
}

export default MovieList;

{/* <button>Hello</button>  */}