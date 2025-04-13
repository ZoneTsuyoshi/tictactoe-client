import React from 'react';
import ReactDOM from 'react-dom/client';
import { Client } from 'boardgame.io/react';
import { TicTacToe } from './game';
import { Board } from './board';

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

