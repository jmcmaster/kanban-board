import React, { Component } from 'react';
import CreateCardContainer from '../containers/CreateCardContainer';

class CardList extends Component {
  render() {
    const { cards, list, board } = this.props;
    return (
      <div>
        <h3>{list.name}</h3>
        {cards.map((card) => (
          <div key={card.id}>{card.name}</div>
        ))}
        <CreateCardContainer list={list} board={board} />
      </div>
    );
  }
}

export default CardList;