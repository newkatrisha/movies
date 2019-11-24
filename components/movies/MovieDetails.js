import React from 'react'

const MovieDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div>
            <h1>About Movie {id}</h1>
        </div>
    )
}

export default MovieDetails;
