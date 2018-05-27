import React, { Component } from 'react';

class CreateListForm extends Component {
  state = {
    newListName: ''
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.addList(this.state.newListName)
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