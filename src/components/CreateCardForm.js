import React, { Component } from 'react';

class CreateCardForm extends Component {
  state = {
    newCard: ''
  }

  handleInputChange = (e) => {
    this.setState({newCard: e.target.value})
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.addCard(this.state.newCard)
    this.setState({newCard: ''})
  }

  render() {
    return (
      <form
          onSubmit={this.handleFormSubmit}>
          <input
            onChange={this.handleInputChange}
            value={this.state.newCard}
            type="text"
            placeholder="Add new card..." />
        </form>
    );
  }
}

export default CreateCardForm;