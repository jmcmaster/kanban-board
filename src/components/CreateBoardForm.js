import React, { Component } from 'react';

class CreateBoardForm extends Component {
  state = {
    newBoardName: ''
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.addBoard(this.state.newBoardName)
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