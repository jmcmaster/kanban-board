const boards = {
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
};

export default {
  boards
};