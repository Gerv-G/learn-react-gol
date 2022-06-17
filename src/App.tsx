import React from 'react';
import './App.css';
import Board from './Board'

function App() {
  return (
    <div className="game">
      <div className="game-board">
        {Board(20, 20)}
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

export default App;
