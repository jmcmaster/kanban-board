import React, { Component } from 'react';
import { addBoard } from '../actions';

class CreateBoardForm extends Component {
  state = {
    newBoardName: ''
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    addBoard(this.state.newBoardName)
    this.setState({newBoardName: ''})
  }

  handleInputChange = (e) => {
    this.setState({newBoardName: e.target.value})
  }

  render() {
    return (
      <form
          onSubmit={this.handleFormSubmit}>
          <input
            onChange={this.handleInputChange}
            value={this.state.newBoardName}
            type="text"
            placeholder="Add new board..." />
        </form>
    );
  }
}

export default CreateBoardForm;