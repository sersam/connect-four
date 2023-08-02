const mockContext = {
  players: [],
  setPlayers: () => {},
  currentPlayer: 0,
  setCurrentPlayer: () => {},
  playerType: '',
  setPlayerType: () => {},
  currentRow: [],
  setCurrentRow: () => {},
  board: Array.from(Array(7), () => Array.from(Array(7))),
  setBoard: () => {},
  winner: false,
  setWinner: () => {},
};

export { mockContext };
