import AppDispatcher from './AppDispatcher';
import * as actionTypes from './actionTypes';

export const addCard = (value, listId, boardId) => {
  AppDispatcher.dispatch({
    type: actionTypes.ADD_NEW_CARD,
    payload: {value, listId, boardId}
  })
};

export const addList = (name, boardId) => {
  AppDispatcher.dispatch({
    type: actionTypes.ADD_NEW_LIST,
    payload: {name, boardId}
  })
};

export const addBoard = (name) => {
  AppDispatcher.dispatch({
    type: actionTypes.ADD_NEW_BOARD,
    payload: {name}
  })
};