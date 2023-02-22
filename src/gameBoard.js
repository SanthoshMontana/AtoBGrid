import React from 'react';

const GameBoard = ({ board, player }) => {
  return (
    <div className="game-board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cellState, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`cell state-${cellState}`}
            >
              {rowIndex === player.row && colIndex === player.col && (
                <div className="player"></div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
