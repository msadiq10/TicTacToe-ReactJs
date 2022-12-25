import React, {useState} from 'react';
import './App.css';
import {Board} from "./components/Board"

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlayer, setXPlayer] = useState(true);

  const WINNER = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  
  const handleBoxClick = (boxIndex) => {
    const updateBoard = board.map((value, index) => {
      if(index === boxIndex)
        return xPlayer ? "X":"O";
      else
        return value;
    })
    setBoard(updateBoard);
    checkWinner(updateBoard);
    setXPlayer(!xPlayer);
  }

  const checkWinner = (board) => {
    for(let i = 0; i < WINNER.length; i++){
      const [x, y, z] = WINNER[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z])
        return board[x];
    }
  }

  return (
    <div className="App">
      <Board board={board} onClick={handleBoxClick}/>
    </div>
  );
}

export default App;
