import React from 'react';
import './App.css';

function Cell() {
  return (
    <button className="cell">
      {/* TODO */}
    </button>
  )
}

//TODO: programatically generate board based on the specified grid size
function Board() {
  return (
    <div>
      <div className="board-row">
        {Cell()}
        {Cell()}
        {Cell()}
        {Cell()}
        {Cell()}
      </div>
      <div className="board-row">
        {Cell()}
        {Cell()}
        {Cell()}
        {Cell()}
        {Cell()}
      </div>
      <div className="board-row">
        {Cell()}
        {Cell()}
        {Cell()}
        {Cell()}
        {Cell()}
      </div>
      <div className="board-row">
        {Cell()}
        {Cell()}
        {Cell()}
        {Cell()}
        {Cell()}
      </div>
      <div className="board-row">
        {Cell()}
        {Cell()}
        {Cell()}
        {Cell()}
        {Cell()}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

export default App;
