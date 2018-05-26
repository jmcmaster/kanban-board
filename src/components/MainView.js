import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import BoardStore from '../BoardStore';
import CreateBoardForm from './CreateBoardForm';

class MainView extends Component {
  state = {
    boards: BoardStore.getBoards()
  }

  updateItems = () => {
    this.setState({ boards: BoardStore.getBoards() });
  }

  componentDidMount() {
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

  render() {
    const { boards } = this.state;
    return (
      <div>
        <CreateBoardForm />
        {Object.keys(boards).map((board) => {
          const { id, name } = boards[board];
          return <li key={id}>
            <Link to={`/b/${id}`}>{name}</Link>
          </li>
        })}
      </div>
    );
  }
}

export default MainView;