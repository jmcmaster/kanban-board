import { ADD_NEW_CARD, ADD_NEW_LIST, ADD_NEW_BOARD } from "./actionTypes";

export const addCard = (value, listId, boardId) => ({
  type: ADD_NEW_CARD,
  payload: { value, listId, boardId }
});

export const addList = (name, boardId) => ({
  type: ADD_NEW_LIST,
  payload: { name, boardId }
});

export const addBoard = name => ({
  type: ADD_NEW_BOARD,
  payload: { name }
});
