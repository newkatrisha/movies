import React from 'react';
import { connect } from 'react-redux';
import Boy from '../../avatars/boy-1.png';
import Girl from '../../avatars/girl-1.png';


const User = (props) => {
    
    const { gender, firstName, initials, lastName } = props.profile;
   
    const img = () => {
        if(gender === "Female") {
            return <img className="ui small circular image" src={Girl} />
        } else if (gender === "Male") {
            return <img className="ui small circular bordered image" src={Boy} />
        } return (
            <div>
            <p>{initials}</p>
            </div>
        )
                  
   }
   
    return (
        <div className="ui container">
                <div className="menu">
                    <div className="item">
                    <div className="ui large header">
                        <p>Hi, {firstName}!</p>
                    </div>
                    </div>
                </div>
                <div className="right menu">
                    <button className="ui button"><i className="icon settings"></i>Edit Profile</button>
                </div>
            
            <div className="ui bottom attached segment">
                <div className="ui items">
                    <div className="item">
                        <div className="ui small image">
                            <img src={Boy} />
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        
    )
}

const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(User);



{/* <div className="ui top attached menu"></div>
                
                <button className="ui right floated button">Right Floated</button> */}
                
                 {/* <div className="ui item">
                        <div className="ui circular segment">
                            <div className="ui image">
                                {img()}
                            </div>
                        </div>
            </div> */}