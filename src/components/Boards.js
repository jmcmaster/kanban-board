import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Boards extends Component {
  render() {
    const { boards } = this.props;
    return (
      <div>
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

export default Boards;