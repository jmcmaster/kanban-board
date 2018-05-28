import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
// import flow from 'lodash/flow';

class Card extends Component {
  render() {
    const { card, connectDragSource } = this.props;
    return connectDragSource(
      <div >{card.name}</div>
    );

  }
}

const cardSource = {
  beginDrag({ card }) {
      return {
          card
      }
  }
}

function collectSource(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  }
}

export default DragSource('CARD', cardSource, collectSource)(Card);

// export default flow(
//   DragSource('CARD', cardSource, collectSource),
//   DropTarget('CARD', cardTarget, collectTarget)
//  )(Card);