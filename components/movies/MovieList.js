import React from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getMovies } from '../../selectors';
import Movies from './Movies';
import { addMovie, deleteMovie } from '../../store/actions/movieActions';
import InfiniteScroll from 'react-infinite-scroll-component';



class MovieList extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
          items: 20,
          hasMoreItems: true
        };
      }

    loadMore = () => {
        if(this.state.items === 100){
            this.setState({ hasMoreItems: false});
        } else {
            setTimeout(() => {
            this.setState({ items: this.state.items + 10});
            }, 2000);
        }
    }

    render() {
        const {movies, myMovies, addMovie, deleteMovie, auth } = this.props;
        console.log(auth);
        const load = <div className="ui segment">
                         <div className="ui active inverted dimmer">
                        <div className="ui mini text loader">Loading</div>
                        </div>
                        </div>
                  
        if(movies && myMovies && myMovies.length !==0) {
            const films = movies && movies.filter(el => !myMovies.some(el2 => el.id === el2.id));
            const x = films && films.slice(0, this.state.items);
            return (
                <InfiniteScroll
                    dataLength={x.length}
                    next={this.loadMore}
                    hasMore={this.state.hasMoreItems}
                    loader={load}
                    scrollThreshold="200px"
                    endMessage={
                        <button>
                        Click to see more
                        </button>
                    }
                >
                    <div className="ui container">
                        <div className="ui grid five column">
                        {x.map(movie => {
                        return (
                        <div className="column" >
                            <Movies 
                                movie={movie} 
                                addMovie={addMovie}
                                deleteMovie={deleteMovie}
                                key={movie.id} 
                                auth={auth} 
                            />
                        </div> 
                        )
                        })}
                        </div>  
                    </div>     
                </InfiniteScroll> 
            )
        } else return (
            <InfiniteScroll
                dataLength={movies && movies.slice(0, this.state.items).length}
                next={this.loadMore}
                hasMore={this.state.hasMoreItems}
                loader={load}
                scrollThreshold="200px"
                endMessage={
                    <div className="ui container center aligned row">
                    
                    Click to see more
                   
                    </div>
                }
            >
                <div className="ui container">
                    <div className="ui grid five column"> 
                        { movies && movies.slice(0, this.state.items).map(movie => {
                            return (
                                <div className="column" >
                                    <Movies 
                                        movie={movie} 
                                        addMovie={addMovie}
                                        deleteMovie={deleteMovie}
                                        auth={auth}
                                        key={movie.id}  
                                    />
                                </div>
                            )
                        })}
                    </div> 
                 </div>
                </InfiniteScroll>
                   
        )
       }
}


const mapStateToProps = (state) => {
    console.log(state);
    return {
        movies: getMovies(state),
        myMovies: state.firebase.profile.movies,
        auth: state.firebase.auth
   }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        addMovie: (movie, id) => dispatch(addMovie(movie, id)),
        deleteMovie: (movie) => dispatch(deleteMovie(movie))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'movies_new' }
    ])
)(MovieList);