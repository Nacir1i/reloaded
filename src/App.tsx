import { useEffect, useState } from "react";
import Board from "./Board"

export type Player = 'white' | 'black';

export type chessPiece = {
  name: 'king' | 'queen' | 'bishop' | 'knight' | 'rook' | 'pawn';
  color: Player;
  position: {
    x: number;
    y: number;
  };
  image: string;
};


const initialWhitePieces: chessPiece[] = [
  { name: 'king', color: 'white', position: { x: 1, y: 5 }, image: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg' },
  { name: 'queen', color: 'white', position: { x: 1, y: 4 }, image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg' },
  { name: 'bishop', color: 'white', position: { x: 1, y: 3 }, image: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg' },
  { name: 'bishop', color: 'white', position: { x: 1, y: 6 }, image: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg' },
  { name: 'knight', color: 'white', position: { x: 1, y: 2 }, image: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg' },
  { name: 'knight', color: 'white', position: { x: 1, y: 7 }, image: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg' },
  { name: 'rook', color: 'white', position: { x: 1, y: 1 }, image: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg' },
  { name: 'rook', color: 'white', position: { x: 1, y: 8 }, image: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg' },
  { name: 'pawn', color: 'white', position: { x: 2, y: 1 }, image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg' },
  { name: 'pawn', color: 'white', position: { x: 2, y: 2 }, image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg' },
  { name: 'pawn', color: 'white', position: { x: 2, y: 3 }, image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg' },
  { name: 'pawn', color: 'white', position: { x: 2, y: 4 }, image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg' },
  { name: 'pawn', color: 'white', position: { x: 2, y: 5 }, image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg' },
  { name: 'pawn', color: 'white', position: { x: 2, y: 6 }, image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg' },
  { name: 'pawn', color: 'white', position: { x: 2, y: 7 }, image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg' },
  { name: 'pawn', color: 'white', position: { x: 2, y: 8 }, image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg' },
];
const initialBlackPieces: chessPiece[] = [
  { name: 'king', color: 'black', position: { x: 8, y: 5 }, image: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg' },
  { name: 'queen', color: 'black', position: { x: 8, y: 4 }, image: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg' },
  { name: 'bishop', color: 'black', position: { x: 8, y: 3 }, image: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg' },
  { name: 'bishop', color: 'black', position: { x: 8, y: 6 }, image: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg' },
  { name: 'knight', color: 'black', position: { x: 8, y: 2 }, image: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg' },
  { name: 'knight', color: 'black', position: { x: 8, y: 7 }, image: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg' },
  { name: 'rook', color: 'black', position: { x: 8, y: 1 }, image: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg' },
  { name: 'rook', color: 'black', position: { x: 8, y: 8 }, image: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg' },
  { name: 'pawn', color: 'black', position: { x: 7, y: 1 }, image: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg' },
  { name: 'pawn', color: 'black', position: { x: 7, y: 2 }, image: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg' },
  { name: 'pawn', color: 'black', position: { x: 7, y: 3 }, image: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg' },
  { name: 'pawn', color: 'black', position: { x: 7, y: 4 }, image: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg' },
  { name: 'pawn', color: 'black', position: { x: 7, y: 5 }, image: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg' },
  { name: 'pawn', color: 'black', position: { x: 7, y: 6 }, image: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg' },
  { name: 'pawn', color: 'black', position: { x: 7, y: 7 }, image: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg' },
  { name: 'pawn', color: 'black', position: { x: 7, y: 8 }, image: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg' },
];

function App() {
  const [currentPlayer, setCurrentPlayer] = useState<Player>('white');
  const [whitePieces, setWhitePieces] = useState<chessPiece[]>(initialWhitePieces);
  const [blackPieces, setBlackPieces] = useState<chessPiece[]>(initialBlackPieces);

  function handleTogglePlayer() {
    setCurrentPlayer(currentPlayer === 'white' ? 'black' : 'white');
  }
  function getPieceDisplayPosition(position: { x: number, y: number }, currentPlayer: 'white' | 'black'): { x: number, y: number } {
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
    const newWhitePieces = initialWhitePieces.map(piece => ({
      ...piece,
      position: getPieceDisplayPosition(piece.position, currentPlayer),
    }));
    const newBlackPieces = initialBlackPieces.map(piece => ({
      ...piece,
      position: getPieceDisplayPosition(piece.position, currentPlayer),
    }));

    setWhitePieces(newWhitePieces);
    setBlackPieces(newBlackPieces);
  }, [currentPlayer]);

  return (
    <div className='w-full h-full relative'>
      <Board pieces={[...blackPieces, ...whitePieces]} currentPlayer={currentPlayer} />
      <div className="absolute top-0 right-0 space-x-3">
        <button onClick={handleTogglePlayer} className="bg-red-400 p-2 py-1 rounded-lg">toggl player</button>
      </div>
    </div>
  )
}

export default App
