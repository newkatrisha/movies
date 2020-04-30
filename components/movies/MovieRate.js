import React, { useState } from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getForRate } from '../../selectors';
import MovieSummary from './MovieSummary';
import { Link } from 'react-router-dom';
import { Progress } from 'semantic-ui-react'


const MovieRate  = (props) => {
    
    const [ rate, setRate ] = useState({
        items: [],
        begin: 0,
        end: 5
    })

    const handleShowMore = (e) => {
        e.preventDefault();
        setRate({
            items: props.movies,
            begin: rate.begin + 5,
            end: rate.end + 5 
        });
    }

    
    const items = props.movies;
    const rated = props.ratedMovies;
    if(!rated) {
        return null
    }
    else if(rated && rated.length < 10){
        const unique = items && rated && items.filter(item => !rated.some(el => item.id === el.id));
        const uniqueMovies = unique && unique.slice(rate.begin, rate.end).map(
            item => {
                return(
                    <div className="column">
                        <MovieSummary movie={item} key={item.id} />
                    </div>
                )
            }
        )
        return  (
            <div className="ui container" >
                <Progress warning percent={rated.length*10} progress />
                <div className="ui grid six column row stretched" style={{height: '100%'}}>
                    {uniqueMovies}
                    <div className="column two wide">
                    <button className="ui fluid button" onClick={handleShowMore}><i className="large caret right icon"></i></button>
                    </div>
                </div> 
                
            </div> 
        )
    } else return (
        <Link to='/recommend'>
        <div className="ui container center aligned row">
            <div className="ui big positive message">
                <div className="header">
                    Submit!
                </div>
                <p>Click here to get our recommendations for movies we think you'll like.</p>
            </div>
        </div>
        </Link>
                
    )
    
}

const mapStateToProps = (state) => {
    return {
        movies: getForRate(state),
        auth: state.firebase.profile,
        ratedMovies: state.firebase.profile.ratedMovies
   }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'movies_new' }
    ])
)(MovieRate);



