import Board from "./Board";

interface Position {
  x: number;
  y: number;
}

enum PieceColor {
  White = "white",
  Black = "black",
}

enum Piece {
  King = "king",
  Queen = "queen",
  Bishop = "bishop",
  Knight = "knight",
  Rook = "rook",
  Pawn = "pawn",
}

export class ChessPiece {
  name: Piece;
  color: PieceColor;
  position: Position;
  image: string;
  constructor(
    name: Piece,
    color: PieceColor,
    position: Position,
    image: string
  ) {
    this.color = color;
    this.position = position;
    this.name = name;
    this.image = image;
  }
}

// Behavior / states

function App() {
  const initialWhitePieces: ChessPiece[] = [
    {
      name: Piece.Rook,
      color: PieceColor.White,
      position: { x: 1, y: 1 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg",
    },
    {
      name: Piece.Knight,
      color: PieceColor.White,
      position: { x: 2, y: 1 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg",
    },
    {
      name: Piece.Bishop,
      color: PieceColor.White,
      position: { x: 3, y: 1 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg",
    },
    {
      name: Piece.Queen,
      color: PieceColor.White,
      position: { x: 4, y: 1 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg",
    },
    {
      name: Piece.King,
      color: PieceColor.White,
      position: { x: 5, y: 1 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg",
    },
    {
      name: Piece.Bishop,
      color: PieceColor.White,
      position: { x: 6, y: 1 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg",
    },
    {
      name: Piece.Knight,
      color: PieceColor.White,
      position: { x: 7, y: 1 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg",
    },
    {
      name: Piece.Rook,
      color: PieceColor.White,
      position: { x: 8, y: 1 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg",
    },
    {
      name: Piece.Pawn,
      color: PieceColor.White,
      position: { x: 1, y: 2 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg",
    },
    {
      name: Piece.Pawn,
      color: PieceColor.White,
      position: { x: 2, y: 2 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg",
    },
    {
      name: Piece.Pawn,
      color: PieceColor.White,
      position: { x: 3, y: 2 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg",
    },
    {
      name: Piece.Pawn,
      color: PieceColor.White,
      position: { x: 4, y: 2 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg",
    },
    {
      name: Piece.Pawn,
      color: PieceColor.White,
      position: { x: 5, y: 2 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg",
    },
    {
      name: Piece.Pawn,
      color: PieceColor.White,
      position: { x: 6, y: 2 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg",
    },
    {
      name: Piece.Pawn,
      color: PieceColor.White,
      position: { x: 7, y: 2 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg",
    },
    {
      name: Piece.Pawn,
      color: PieceColor.White,
      position: { x: 8, y: 2 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg",
    },
  ];

  const initialBlackPieces: ChessPiece[] = [
    {
      name: Piece.Rook,
      color: PieceColor.Black,
      position: { x: 1, y: 8 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg",
    },
    {
      name: Piece.Knight,
      color: PieceColor.Black,
      position: { x: 2, y: 8 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg",
    },
    {
      name: Piece.Bishop,
      color: PieceColor.Black,
      position: { x: 3, y: 8 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg",
    },
    {
      name: Piece.Queen,
      color: PieceColor.Black,
      position: { x: 4, y: 8 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg",
    },
    {
      name: Piece.King,
      color: PieceColor.Black,
      position: { x: 5, y: 8 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg",
    },
    {
      name: Piece.Bishop,
      color: PieceColor.Black,
      position: { x: 6, y: 8 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg",
    },
    {
      name: Piece.Knight,
      color: PieceColor.Black,
      position: { x: 7, y: 8 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg",
    },
    {
      name: Piece.Rook,
      color: PieceColor.Black,
      position: { x: 8, y: 8 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg",
    },
    {
      name: Piece.Pawn,
      color: PieceColor.Black,
      position: { x: 1, y: 7 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg",
    },
    {
      name: Piece.Pawn,
      color: PieceColor.Black,
      position: { x: 2, y: 7 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg",
    },
    {
      name: Piece.Pawn,
      color: PieceColor.Black,
      position: { x: 3, y: 7 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg",
    },
    {
      name: Piece.Pawn,
      color: PieceColor.Black,
      position: { x: 4, y: 7 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg",
    },
    {
      name: Piece.Pawn,
      color: PieceColor.Black,
      position: { x: 5, y: 7 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg",
    },
    {
      name: Piece.Pawn,
      color: PieceColor.Black,
      position: { x: 6, y: 7 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg",
    },
    {
      name: Piece.Pawn,
      color: PieceColor.Black,
      position: { x: 7, y: 7 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg",
    },
    {
      name: Piece.Pawn,
      color: PieceColor.Black,
      position: { x: 8, y: 7 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black flex justify-center items-center">
      <Board pieces={[...initialBlackPieces, ...initialWhitePieces]} />
    </div>
  );
}

export default App;
