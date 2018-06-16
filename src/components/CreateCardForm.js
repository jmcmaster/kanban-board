import React, { Component } from 'react';
import '../styles/styles.css';

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
      <div className="CreateCardForm">
        <form
            className="CreateCardForm_form"
            onSubmit={this.handleFormSubmit}>
            <input
              className="CreateCardForm__input"
              onChange={this.handleInputChange}
              value={this.state.newCard}
              type="text"
              placeholder="Add new card..." />
          </form>
      </div>
    );
  }
}

export default CreateCardForm;