import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';
import flow from 'lodash/flow';
import CreateCardContainer from '../containers/CreateCardContainer';
import Card from './Card';
import { handleDrop } from '../actions/dragDropActions';
import '../styles/styles.css';

class CardList extends Component {
  render() {
    const { cards, list, board, connectDropTarget } = this.props;
    return connectDropTarget(
      <div className="CardListWrapper">
        <div className="CardList">
          <h3>{list.name}</h3>
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
          <CreateCardContainer list={list} board={board} />
        </div>
      </div>
    );
  }
}

const dropSource = {
  drop(props, monitor) {
      const droppedItem = monitor.getItem(); // this item is being dragged
      props.handleDrop(droppedItem.card, props.list.id);
      // const droppedItem = props.onDrop(monitor.getItem());
  }
}

function collect(connect, monitor) {
  return {
      // Call this function inside render()
      // to let React DnD handle the drag events:
      connectDropTarget: connect.dropTarget(),
      // You can ask the monitor about the current drag state:
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true }),
      canDrop: monitor.canDrop(),
      itemType: monitor.getItemType()
  };
}

// export default CardList;
// export default DropTarget('CARD', dropSource, collect)(CardList);


export default flow(
  DropTarget('CARD', dropSource, collect),
  connect(null, { handleDrop })
 )(CardList);