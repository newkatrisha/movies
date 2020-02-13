import React from 'react';
import Movies from './Movies';
import { Link } from 'react-router-dom';


const MovieList = ({movies, myMovies}) => {
    console.log('movielist');
    if(movies && myMovies) {
        const films = movies.filter(el => !myMovies.some(el2 => el.id === el2.id));
        return (
            <div className="ui grid five column"> 
                { films && films.map(movie => {
                    return (
                        <div className="column" >
                            <Link to={'/movies/' + movie.id }>
                                <Movies movie={movie} key={movie.id}  />
                            </Link>
                        </div>
                    )
                })}
            </div>                   
        )
    } else return (
        <div className="ui grid five column"> 
            { movies && movies.map(movie => {
                return (
                    <div className="column" >
                        <Link to={'/movies/' + movie.id }>
                            <Movies movie={movie} key={movie.id}  />
                        </Link>
                    </div>
                )
            })}
        </div>                   
    )
    
    
    
}

export default MovieList;
