import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
    console.log('intro');
    return (
        <div className="ui container">
            <div className="ui placeholder segment">
                <div className="ui icon header">
                    Let's see what movies you like!
                </div>
                <Link to='/rate'>
                <div className="ui primary button">Rate movies</div>
                </Link>
                
            </div>
        </div>
    )
}

export default Intro;