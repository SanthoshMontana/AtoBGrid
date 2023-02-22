import React from 'react';

const StatusPanel = ({ player }) => {
  return (
    <div className="status-panel">
      <div>Health: {player.health}</div>
      <div>Moves: {player.moves}</div>
    </div>
  );
};
