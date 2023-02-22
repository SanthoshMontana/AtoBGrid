const ROWS = 100;
const COLUMNS = 100;

const createBoard = () => {
  const board = [];

  for (let row = 0; row < ROWS; row++) {
    const rowArray = [];

    for (let col = 0; col < COLUMNS; col++) {
      // Generate a random cell state
      const cellState = Math.floor(Math.random() * 4);

      rowArray.push(cellState);
    }

    board.push(rowArray);
  }

  return board;
}
