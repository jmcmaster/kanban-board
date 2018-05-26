import React, { Component } from 'react';
import { addCard } from '../actions';

class CardList extends Component {
  state = {
    newCard: ''
  }

  handleInputChange = (e) => {
    this.setState({newCard: e.target.value})
  }

  handleFormSubmit = (e) => {
    const { list, board } = this.props;

    e.preventDefault();
    addCard(this.state.newCard, list.id, board.id)
    this.setState({newCard: ''})
  }

  render() {
    const { cards, list } = this.props;
    return (
      <div>
        <h3>{list.name}</h3>
        {cards.map((card) => (
          <div key={card.id}>{card.name}</div>
        ))}
        <form
          onSubmit={this.handleFormSubmit}>
          <input
            onChange={this.handleInputChange}
            value={this.state.newCard}
            type="text"
            placeholder="Add new..." />
        </form>
      </div>
    );
  }
}

export default CardList;