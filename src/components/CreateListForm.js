import React, { Component } from 'react';
import { addList } from '../actions';

class CreateListForm extends Component {
  state = {
    newListName: ''
  }

  handleFormSubmit = (e) => {
    const { board } = this.props;
    e.preventDefault();
    addList(this.state.newListName, board.id)
    this.setState({newListName: ''})
  }

  handleInputChange = (e) => {
    this.setState({newListName: e.target.value})
  }

  render() {
    return (
      <form
          onSubmit={this.handleFormSubmit}>
          <input
            onChange={this.handleInputChange}
            value={this.state.newListName}
            type="text"
            placeholder="Add new list..." />
        </form>
    );
  }
}

export default CreateListForm;