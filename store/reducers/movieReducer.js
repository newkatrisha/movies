const initState = {
    // movies: [
    //     {id: '1', title: 'Anaconda', description: 'blah blah blah'},        
    //     {id: '2', title: 'Avatar', description: 'blah blah blah'},        
    //     {id: '3', title: 'Unbelievable', description: 'blah blah blah'}        
    // ]
    movieError: null
}

const movieReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            console.log('added movie', action.movie.title);
            return state;
        case 'ADD_MOVIE_ERROR':
            console.log('failed to add movie');
            return {
                ...state,
                movieError: action.err.message
            }
        case 'DELETE_MOVIE':
            console.log('deleted movie', action.movie.title);
            return state;
        case 'DELETE_MOVIE_ERROR':
            console.log('failed to delete movie');
            return {
                ...state,
                deleteError: action.err.message
            }
        default:
            return state;
    }
}

export default movieReducer;