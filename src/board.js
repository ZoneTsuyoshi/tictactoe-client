import React from 'react';

export const Board = ({ G, ctx, moves }) => {
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

