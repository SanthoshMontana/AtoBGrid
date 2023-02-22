import React, { useState, useEffect } from 'react';

const GameBoard = ({ board, player, setPlayer }) => {
  const handleKeyDown = (event) => {
    switch (event.keyCode) {
      case 37: // left arrow
        setPlayer((prevPlayer) => ({
          ...prevPlayer,
          col: Math.max(prevPlayer.col - 1, 0),
        }));
        break;
      case 38: // up arrow
        setPlayer((prevPlayer) => ({
          ...prevPlayer,
          row: Math.max(prevPlayer.row - 1, 0),
        }));
        break;
      case 39: // right arrow
        setPlayer((prevPlayer) => ({
          ...prevPlayer,
          col: Math.min(prevPlayer.col + 1, COLUMNS - 1),
        }));
        break;
      case 40: // down arrow
        setPlayer((prevPlayer) => ({
          ...prevPlayer,
          row: Math.min(prevPlayer.row + 1, ROWS - 1),
        }));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setPlayer]);

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
