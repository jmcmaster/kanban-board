import { HANDLE_DROP } from './actionTypes';

export const handleDrop = (card, newListId) => ({
  type: HANDLE_DROP,
  payload: {card, newListId}
});