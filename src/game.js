export const TicTacToe = {
  setup: () => ({ cells: Array(9).fill(null) }),
  moves: {
    clickCell: ({ G, playerID }, id) => {
      if (G.cells[id] === null) {
        G.cells[id] = playerID;
      }
    }
  },
};

