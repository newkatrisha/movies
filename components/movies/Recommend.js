import React from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getForRecommend } from '../../selectors';
import Movies from './Movies';

const Recommend = (props) => {
    
    const { movies, auth } = props;
    return (
        <div className="ui container">
            <div className="ui five column grid"> 
                { movies && movies.map(movie => {
                    return (
                        <div className="column">
                            <Movies 
                                movie={movie} 
                                auth={auth}
                                key={movie.id}  
                            />
                        </div>
                    )
                })}
            </div> 
        </div>
    )
    
}

const mapStateToProps = (state) => {
    return {
        movies: getForRecommend(state),
        auth: state.firebase.auth
   }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'movies_new' }
    ])
)(Recommend);