import React from 'react'
import { Search} from 'semantic-ui-react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

class SearchFilter extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { isLoading: false, results: [], value: '' };
      }

    handleResultSelect = (e, {result}) => {
        this.setState({ 
            value: result.title,
            results: result
        });
    }

    searchData = (e) => {
        e.preventDefault();
        this.setState({
            isLoading: true,
            value: e.target.value
        })
        const { value } = this.state;
        const { movies } = this.props;
        const result = movies.filter(el => el.title.toLowerCase().indexOf(value.toLowerCase()) === 0);
        
        return this.setState({
            results: result,
            isLoading: false
            })
    }

    render() {        
        const { isLoading, results, value } = this.state;

        if(results.id) {
            this.setState({results: [], value: ''});
            return <Redirect to={'/movies/' + results.id }/>
        }

        return <Search
            loading={isLoading}
            onSearchChange={this.searchData}
            onResultSelect={this.handleResultSelect}
            results={results}
            value={value}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.firestore.ordered.movies_new
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'movies_new' }
    ])
)(SearchFilter)


// !== -1