const GameBoard = ({ board, player, setPlayer }) => {
  const handleKeyDown = (event) => {
    // ...

    switch (board[player.row][player.col]) {
      case 0: // Blank
        moves: prevPlayer.moves - 1,
        break;
      case 1: // Speeder
        setPlayer((prevPlayer) => ({
          ...prevPlayer,
          health: prevPlayer.health - 5,
        }));
        break;
      case 2: // Lava
        setPlayer((prevPlayer) => ({
          ...prevPlayer,
          health: prevPlayer.health - 50,
          moves: prevPlayer.moves - 10,
        }));
        break;
      case 3: // Mud
        setPlayer((prevPlayer) => ({
          ...prevPlayer,
          health: prevPlayer.health - 10,
          moves: prevPlayer.moves - 5,
        }));
        break;
      default:
        break;
    }
  };

  // ...
};
