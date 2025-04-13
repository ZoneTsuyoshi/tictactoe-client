import React from 'react';
import ReactDOM from 'react-dom/client';
import { Client } from 'boardgame.io/react';
import { TicTacToe } from './game';
// import { Board } from './board';

const Board = ({ G, ctx, moves }) => {
  if (!G || !ctx) return <div>Loading...</div>;
  
  return (
    <div>
      <h2>Player {ctx.currentPlayer}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 100px)' }}>
        {G.cells.map((cell, i) => (
          <button
            key={i}
            onClick={() => moves.clickCell(i)}
            style={{ width: 100, height: 100, fontSize: 24 }}
          >
            {cell}
          </button>
        ))}
      </div>
    </div>
  );
};

const App = Client({
  game: TicTacToe,
  board: Board,
  debug: true,
  multiplayer: {
    server: 'https://express-hello-world-brjd.onrender.com',
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

