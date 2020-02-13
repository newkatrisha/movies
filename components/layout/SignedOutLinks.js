import React from 'react';

const SignedOutLinks = () => {
    return (
        <div className="ui secondary menu">
            <a className="item" href='/signup'>
                Signup
            </a>
            <a className="item" href='login'>
                Login
            </a>
        </div>
        
    );
}

export default SignedOutLinks;