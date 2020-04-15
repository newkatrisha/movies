import React from 'react';
import { connect } from 'react-redux';
import Boy from '../../avatars/boy-1.png';
import Girl from '../../avatars/girl-1.png';


const User = (props) => {
    console.log(props.gender);
    const img = () => {
        if(props.gender === "Female") {
            return <img className="ui small circular image" src={Girl} />
        } else if (props.gender === "Male") {
            return <img className="ui small circular bordered image" src={Boy} />
        } else return null
   }
    return (
        <div className="ui container">
            <div id="user" className="ui placeholder segment">
                <div className="ui items">
                    <div className="item">
                    {img()}
                    <div className="content">
                        <a id="profile" className="header" href="">{props.name}</a>
                    </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        gender: state.firebase.profile.gender,
        name: state.firebase.profile.firstName
    }

}

export default connect(mapStateToProps)(User);