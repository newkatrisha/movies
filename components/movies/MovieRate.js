import React from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getForRate } from '../../selectors';
import MovieSummary from './MovieSummary';
import { Link } from 'react-router-dom';
import { Progress } from 'semantic-ui-react'


class MovieRate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            begin: 0,
            end: 5
        }
      }

    handleShowMore = (e) => {
        e.preventDefault();
        this.setState({
            items: this.props.movies,
            begin: this.state.begin + 5,
            end: this.state.end + 5 
        });
        console.log(this.state.items.length);
    }

    render() {
        console.log(this.props.ratedMovies);
        const items = this.props.movies;
        const rated = this.props.ratedMovies;
        if(!rated) {
            return null
        }
        else if(rated && rated.length < 10){
            console.log(rated.length);
            const unique = items && rated && items.filter(item => !rated.some(el => item.id === el.id));
            const uniqueMovies = unique && unique.slice(this.state.begin, this.state.end).map(
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
                        <button className="ui fluid button" onClick={this.handleShowMore}><i className="large caret right icon"></i></button>
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



