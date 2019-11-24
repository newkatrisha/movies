import React from 'react';
import { connect } from 'react-redux';
import { addMovie } from '../../store/actions/movieActions';
import { deleteMovie } from '../../store/actions/movieActions';



const MovieSummary = (props) => {
    console.log(props);
    const onAddClick = (e) => {
        // e.preventDefault();
        props.addMovie(props.movie);
    }
    const onDeleteClick = (e) => {
        props.deleteMovie(props.movie);
    }

    let exists = 0;
    props.userMovies && props.userMovies.forEach(element => {
        if (props.movie.id == element.id){
            exists = 1;
        }
    });

    // console.log("exists = ", exists)

    const button = 
        exists ?
        <button onClick={onDeleteClick}>Delete</button> :
        <button onClick={onAddClick}>Add</button>
    

    
    return (
        
            <div className="ui fluid card">
                <div className="image">
                    <img alt="" src={props.movie.poster} />
                </div>
                <div className="content">
                    <a href="/" className="header">{props.movie.title}</a>
                </div>
                {button}
                
            </div>
            
            
        
        
        
    )
    
}



const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth,
        userMovies: state.firebase.profile.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        addMovie: (movie) => dispatch(addMovie(movie)),
        deleteMovie: (movie) => dispatch(deleteMovie(movie))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieSummary);

{/* <div className="column"> */}
{/* <div>
                    { button }
                </div> */}
                {/* <div>
                    <button onClick={onAddClick}>Add</button>
                </div> */}
                {/* </div> */}

{/* {props.userMovies && props.userMovies.map(userMovie => 
                    props.movie.id === userMovie.id ? <button>Delete</button> : <button>Add</button>
                )} */}
                // 
                // 

// it works!!!!!!!!!!!!!!!!!!!!
// const userMovie = props.userMovies.map(userMovie => 
//     props.movie.id == userMovie.id ? <button>Delete</button> : null)

// changes to filegit stat