import { useEffect, useState } from "react";
import Board from "./Board"

export type Player = 'white' | 'black';

export type Position = {
  x: number,
  y: number
}

export type PieceName = 'king' | 'queen' | 'bishop' | 'knight' | 'rook' | 'pawn';

export type ChessPiece = {
  name: PieceName;
  color: Player;
  position: Position,
  moves: Position[],
  image: string;
};

export const getPieceMove = (piece: ChessPiece, board: ChessPiece[]): Position[] => {
  let moves: Position[] = [];

  if (fixedPosition[piece.name]) {
    const fixedMoves = fixedPosition[piece.name]?.[piece.color] || [];
    moves = fixedMoves.map(move => ({
      x: piece.position.x + move.x,
      y: piece.position.y + move.y,
    }));
  }

  if (dynamicPosition[piece.name]) {
    const dynamicMoves = dynamicPosition[piece.name]?.[piece.color] || [];

    dynamicMoves.forEach(move => {
      let step = 1;

      while (true) {
        const newX = piece.position.x + move.x * step;
        const newY = piece.position.y + move.y * step;

        if (newX < 1 || newX > 8 || newY < 1 || newY > 8) break;

        const occupiedPiece = board.find(p => p.position.x === newX && p.position.y === newY);

        if (occupiedPiece) {
          if (occupiedPiece.color !== piece.color) {
            moves.push({ x: newX, y: newY });
          }
          break;
        }

        moves.push({ x: newX, y: newY });
        step++;
      }
    });
  }

  return moves.filter(move => move.x >= 1 && move.x <= 8 && move.y >= 1 && move.y <= 8);
};

const fixedPosition: Record<string, Record<Player, Position[]>> = {
  king: {
    white: [ 
      {x: 0, y: 1},
      {x: 0, y: -1},
      {x: 1, y: 0},
      {x: -1, y: 0},
      {x: -1, y: -1},
      {x: 1, y: 1},
      {x: -1, y: 1},
      {x: 1, y: -1}
    ],
    black: [ 
      {x: 0, y: 1},
      {x: 0, y: -1},
      {x: 1, y: 0},
      {x: -1, y: 0},
      {x: -1, y: -1},
      {x: 1, y: 1},
      {x: -1, y: 1},
      {x: 1, y: -1}
    ]
  },
   
  knight: {
      white: [
        {x: 2, y: 1},
        {x: 2, y: -1},
        {x: -2, y: 1},
        {x: -2, y: -1},
        {x: 1, y: 2},
        {x: 1, y: -2},
        {x: -1, y: 2},
        {x: -1, y: -2}
       ],
      black: [
        {x: 2, y: 1},
        {x: 2, y: -1},
        {x: -2, y: 1},
        {x: -2, y: -1},
        {x: 1, y: 2},
        {x: 1, y: -2},
        {x: -1, y: 2},
        {x: -1, y: -2}
       ],
    },
  pawn: {
    white: [
      {x: 0, y: 1},
      {x: 0, y: 2},

    ],
    black: [
      {x: 0, y: -1},
      {x: 0, y: -2},

    ],
  },
}
const dynamicPosition: Record<string, Record<Player, Position[]>> = {
  queen: {
    white: [
      { x: 0, y: 1 },  
      { x: 0, y: -1 }, 
      { x: 1, y: 0 },  
      { x: -1, y: 0 }, 
      { x: 1, y: 1 },
      { x: 1, y: -1 },
      { x: -1, y: 1 },
      { x: -1, y: -1 },
    ],
    black: [
      { x: 0, y: 1 },  
      { x: 0, y: -1 }, 
      { x: 1, y: 0 },  
      { x: -1, y: 0 }, 
      { x: 1, y: 1 },
      { x: 1, y: -1 },
      { x: -1, y: 1 },
      { x: -1, y: -1 },
    ]
  },
  bishop: {
    white: [
      { x: 1, y: 1 },
      { x: 1, y: -1 },
      { x: -1, y: 1 },
      { x: -1, y: -1 },
    ],
    black: [
      { x: 1, y: 1 },
      { x: 1, y: -1 },
      { x: -1, y: 1 },
      { x: -1, y: -1 },
    ]
  },
  rook: {
    white: [
      { x: 0, y: 1 },  
      { x: 0, y: -1 }, 
      { x: 1, y: 0 },  
      { x: -1, y: 0 }, 
    ],
    black: [
      { x: 0, y: 1 },  
      { x: 0, y: -1 }, 
      { x: 1, y: 0 },  
      { x: -1, y: 0 }, 
    ]
  }
}

const initialWhitePieces: ChessPiece[] = [
  {
    name: 'king', color: 'white', position: { x: 1, y: 4 }, image: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg',
    moves: []
  },
  {
    name: 'queen', color: 'white', position: { x: 1, y: 5 }, image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg',
    moves: []
  },
  {
    name: 'bishop', color: 'white', position: { x: 1, y: 3 }, image: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg',
    moves: []
  },
  {
    name: 'bishop', color: 'white', position: { x: 1, y: 6 }, image: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg',
    moves: []
  },
  {
    name: 'knight', color: 'white', position: { x: 1, y: 2 }, image: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg',
    moves: []
  },
  {
    name: 'knight', color: 'white', position: { x: 1, y: 7 }, image: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg',
    moves: []
  },
  {
    name: 'rook', color: 'white', position: { x: 1, y: 1 }, image: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg',
    moves: []
  },
  {
    name: 'rook', color: 'white', position: { x: 1, y: 8 }, image: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg',
    moves: []
  },
  {
    name: 'pawn', color: 'white', position: { x: 2, y: 1 }, image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg',
    moves: []
  },
  {
    name: 'pawn', color: 'white', position: { x: 2, y: 2 }, image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg',
    moves: []
  },
  {
    name: 'pawn', color: 'white', position: { x: 2, y: 3 }, image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg',
    moves: []
  },
  {
    name: 'pawn', color: 'white', position: { x: 2, y: 4 }, image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg',
    moves: []
  },
  {
    name: 'pawn', color: 'white', position: { x: 2, y: 5 }, image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg',
    moves: []
  },
  {
    name: 'pawn', color: 'white', position: { x: 2, y: 6 }, image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg',
    moves: []
  },
  {
    name: 'pawn', color: 'white', position: { x: 2, y: 7 }, image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg',
    moves: []
  },
  {
    name: 'pawn', color: 'white', position: { x: 2, y: 8 }, image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg',
    moves: []
  },
];
const initialBlackPieces: ChessPiece[] = [
  {
    name: 'king', color: 'black', position: { x: 8, y: 4 }, image: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg',
    moves: []
  },
  {
    name: 'queen', color: 'black', position: { x: 8, y: 5 }, image: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg',
    moves: []
  },
  {
    name: 'bishop', color: 'black', position: { x: 8, y: 3 }, image: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg',
    moves: []
  },
  {
    name: 'bishop', color: 'black', position: { x: 8, y: 6 }, image: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg',
    moves: []
  },
  {
    name: 'knight', color: 'black', position: { x: 8, y: 2 }, image: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg',
    moves: []
  },
  {
    name: 'knight', color: 'black', position: { x: 8, y: 7 }, image: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg',
    moves: []
  },
  {
    name: 'rook', color: 'black', position: { x: 8, y: 1 }, image: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg',
    moves: []
  },
  {
    name: 'rook', color: 'black', position: { x: 8, y: 8 }, image: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg',
    moves: []
  },
  {
    name: 'pawn', color: 'black', position: { x: 7, y: 1 }, image: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg',
    moves: []
  },
  {
    name: 'pawn', color: 'black', position: { x: 7, y: 2 }, image: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg',
    moves: []
  },
  {
    name: 'pawn', color: 'black', position: { x: 7, y: 3 }, image: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg',
    moves: []
  },
  {
    name: 'pawn', color: 'black', position: { x: 7, y: 4 }, image: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg',
    moves: []
  },
  {
    name: 'pawn', color: 'black', position: { x: 7, y: 5 }, image: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg',
    moves: []
  },
  {
    name: 'pawn', color: 'black', position: { x: 7, y: 6 }, image: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg',
    moves: []
  },
  {
    name: 'pawn', color: 'black', position: { x: 7, y: 7 }, image: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg',
    moves: []
  },
  {
    name: 'pawn', color: 'black', position: { x: 7, y: 8 }, image: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg',
    moves: []
  },
];

function App() {
  const [currentPlayer, setCurrentPlayer] = useState<Player>('white');
  const [whitePieces, setWhitePieces] = useState<ChessPiece[]>(initialWhitePieces);
  const [blackPieces, setBlackPieces] = useState<ChessPiece[]>(initialBlackPieces);

  function handleTogglePlayer() {
    setCurrentPlayer(currentPlayer === 'white' ? 'black' : 'white');
  }

  function getPlayerOrientedPosition(position: { x: number, y: number }, currentPlayer: 'white' | 'black'): { x: number, y: number } {
    const newPositionMap: Record<number, number> = {
      1: 8,
      2: 7,
      3: 6,
      4: 5,
      5: 4,
      6: 3,
      7: 2,
      8: 1,
    };

    const newPosition = currentPlayer === 'white' ? { x: newPositionMap[position.x], y: newPositionMap[position.y] } : position;

    return newPosition;
  }

  useEffect(() => {
  setWhitePieces(prev =>
    prev.map(piece => ({
      ...piece,
      position: getPlayerOrientedPosition(piece.position, currentPlayer),
      moves: getPieceMove(piece, [...whitePieces, ...blackPieces]),
    }))
  );
  setBlackPieces(prev =>
    prev.map(piece => ({
      ...piece,
      position: getPlayerOrientedPosition(piece.position, currentPlayer),
      moves: getPieceMove(piece, [...whitePieces, ...blackPieces]),
    }))
  );
}, [currentPlayer]);

  return (
    <div className='w-full min-h-screen bg-black flex justify-center items-center'>
      <Board pieces={[...blackPieces, ...whitePieces]} currentPlayer={currentPlayer} />
      <div className="absolute top-0 right-0 space-x-3">
        <button onClick={handleTogglePlayer} className="bg-red-400 p-2 py-1 rounded-lg">toggle player</button>
      </div>
    </div>
  )
}


export default App
