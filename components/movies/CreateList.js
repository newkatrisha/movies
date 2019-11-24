import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createList } from '../../store/actions/listActions';

class CreateList extends Component {
    state = {
        title: '',
        description: '',
        movies: []
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createList(this.state)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="ui form container">
                <h3>Create My Movie List</h3>
                <div className="field">
                    <label>Title</label>
                    <input type="title" id="title" placeholder="" onChange={this.handleChange} />
                </div>
                <div className="field">
                    <label>Description</label>
                    <textarea id="description" placeholder="" onChange={this.handleChange} />
                </div>
                <button className="ui button" type="submit">Create</button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createList: (list) => dispatch(createList(list))
    }
}

export default connect(null, mapDispatchToProps)(CreateList);