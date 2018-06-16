import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import CardList from '../components/CardList';
import CreateListContainer from '../containers/CreateListContainer';
import '../styles/styles.css';

class Board extends Component {
  renderBoard = () => {
    const { board } = this.props;
    if (board.lists.length) {
      return (
        <div className="Board">
        {board.lists.map((list) => (

          <CardList
            key={list.id}
            list={list}
            board={board}
            cards={board.cards.filter((card) => card.list === list.id)}
          />


        ))}
        </div>
      );

    }
    else {
      return <h3>No lists yet</h3>
    }
  }

  render() {
    const { board } = this.props;
    return (
      <div className="App">
        <h1>{board.name}</h1>
        <CreateListContainer board={board} />
        {board &&
          this.renderBoard()
        }
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Board);