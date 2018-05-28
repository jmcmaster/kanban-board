import uniqueId from 'lodash/uniqueId';
import { ADD_NEW_CARD, ADD_NEW_LIST, ADD_NEW_BOARD, HANDLE_DROP } from '../actions/actionTypes';

export default function(state = {}, action) {
  if (action.type === ADD_NEW_CARD) {
    const { value, listId, boardId } = action.payload;

    const newCard = {
      name: value,
      list: listId,
      board: boardId,
      id: uniqueId()
    };

    return {
      ...state,
      [boardId]: {
        ...state[boardId],
        cards: [
          ...state[boardId].cards,
          newCard
        ]
      }
    };
  }

  if (action.type === ADD_NEW_LIST) {
    const { name, boardId } = action.payload;
    const id = uniqueId();
    return {
      ...state,
      [boardId]: {
        ...state[boardId],
        lists: [
          ...state[boardId].lists,
          {
            id,
            name
          }
        ]
      }
    };
  }

  if (action.type === ADD_NEW_BOARD) {
    const { name } = action.payload;
    const id = uniqueId();
    return {
      ...state,
      [id]: {
        name,
        id,
        lists: [],
        cards: []
      }
    };
  }

  if (action.type === HANDLE_DROP) {
    console.log(action.payload);
    const {card, newListId} = action.payload;

    return {
      ...state,
      [card.board]: {
        ...state[card.board],
        cards: [
          ...state[card.board].cards.map((c) => {
            if (c.id === card.id) c.list = newListId;
            return c;
          })
        ]
      }
    };
  }

  return state;
}