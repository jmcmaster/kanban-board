import React, { Component } from 'react';
import BoardStore from '../BoardStore';
import CardList from './CardList';
import CreateListForm from './CreateListForm';

class BoardView extends Component {
  state = {
    board: {
      cards: [],
      lists: []
    }
  }

  updateItems = () => {
    const { params } = this.props.match;
    this.setState({ board: BoardStore.getBoard(params.id) });
  }

  componentDidMount() {
    const { params } = this.props.match;
    this.setState({ board: BoardStore.getBoard(params.id) });
    BoardStore.on('change', this.updateItems);
  }

  componentWillUnmount() {
    try {
      BoardStore.off('change', this.updateItems);
    }
    catch (error) {
      console.log(error)
    }
  }

  renderBoard = () => {
    const { board } = this.state;
    return board.lists.map((list) => (
      <div key={list.id}>
        <CardList
          list={list}
          board={board}
          cards={board.cards.filter((card) => card.list === list.id)}
        />
      </div>
    ));
  }

  render() {
    const { board } = this.state;
    return (
      <div className="App">
        <h1>{board.name}</h1>
        <CreateListForm board={board} />
        {this.state.board &&
          this.renderBoard()
        }
      </div>
    );
  }
}

export default BoardView;