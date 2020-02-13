import React from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getForRate } from '../../selectors';
import MovieSummary from './MovieSummary';
import { Redirect } from 'react-router-dom';


class MovieRate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            begin: 0,
            end: 5
        }
      }

    handleShowMore = (e) => {
        console.log('showmore');
        e.preventDefault();
        this.setState({
            items: this.props.movies,
            begin: this.state.begin + 5,
            end: this.state.end + 5 
        })
      }

    render() {
        console.log('rate');
        const items = this.props.movies;
        const rated = this.props.ratedMovies;
        const unique = items && rated && items.filter(item => !rated.some(el => item.id === el.id));
        const movies = unique && unique.slice(this.state.begin, this.state.end).map(
            item => {
                return(
                    <div className="column">
                        <MovieSummary movie={item} key={item.id} />
                    </div>
                )
            }
        ) 
        
        if(this.state.items && this.state.end > this.state.items.length) {
            return <Redirect to='/' />
        }

        return(
            <div className="ui container" >
                <h1>Rate These Movies</h1>
                <div className="ui grid six column row stretched" style={{height: '100%'}}>
                    {movies}
                    <div className="column two wide">
                    <button className="ui  fluid button" onClick={this.handleShowMore}><i className="large caret right icon"></i></button>
                    </div>
                </div> 
            </div>        
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



// this.setState({
//     items: this.props.movies,
//     begin: this.state.items && this.state.begin + 5 > this.state.end ?
//     this.state.begin : this.state.begin + 5,
//     end: this.state.items && this.state.end > this.state.items.length ?
//     this.state.end : this.state.end + 5
//  })


 //Find values that are in result1 but not in result2
// var uniqueResultOne = result1.filter(function(obj) {
//     return !result2.some(function(obj2) {
//         return obj.value == obj2.value;
//     });
// });