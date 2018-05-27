import EventEmitter from 'events';
import uniqueId from 'lodash/uniqueId';
import * as actionTypes from './actions/actionTypes';


let boards = {
  "1000": {
    id: "1000",
    name: "New Project XYZ",
    lists: [
      {name: "Backlog", id: "1100"},
      {name: "In Progress", id: "1101"}
    ],
    cards: [
      {name: "Set up dev environment", list: "1100", board: "1000", id: "1001"},
      {name: "Create style guide", list: "1100", board: "1000", id: "1002"},
      {name: "Build homepage", list: "1100", board: "1000", id: "1003"},
      {name: "Build about us page", list: "1100", board: "1000", id: "1004"},
      {name: "Set up node server", list: "1100", board: "1000", id: "1005"},
      {name: "Create repo", list: "1100", board: "1000", id: "1006"},
      {name: "Test components", list: "1100", board: "1000", id: "1007"},
      {name: "Create functional requirements", list: "1101", board: "1000", id: "1008"},
      {name: "Create system architecture", list: "1101", board: "1000", id: "1009"}
    ]
  }
}

class BoardStore extends EventEmitter {
  constructor() {
    super();

    // AppDispatcher.register((action) => {
    //   if (action.type === actionTypes.ADD_NEW_CARD) { return this.addCard(action.payload); }
    //   if (action.type === actionTypes.ADD_NEW_LIST) { return this.addList(action.payload); }
    //   if (action.type === actionTypes.ADD_NEW_BOARD) { return this.addBoard(action.payload); }
    // });
  }

  getBoard(id) {
    return boards[id];
  }

  getBoards() {
    return boards;
  }

  addList(payload) {
    const { name, boardId } = payload;
    const id = uniqueId();
    boards = {
      ...boards,
      [boardId]: {
        ...boards[boardId],
        lists: [
          ...boards[boardId].lists,
          {
            id,
            name
          }
        ]
      }
    };
    this.emit('change');
  }

  addBoard(payload) {
    const { name } = payload;
    const id = uniqueId();
    boards = {
      ...boards,
      [id]: {
        name,
        id,
        lists: [],
        cards: []
      }
    };
    this.emit('change');
    console.log(boards);
  }

  addCard(payload) {
    const { value, listId, boardId } = payload;

    const newCard = {
      name: value,
      list: listId,
      board: boardId,
      id: uniqueId()
    };

    boards = {
      ...boards,
      [boardId]: {
        ...boards[boardId],
        cards: [
          ...boards[boardId].cards,
          newCard
        ]
      }
    };
    this.emit('change');
  }
}

export default new BoardStore();