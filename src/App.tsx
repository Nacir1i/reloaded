import Board from "./Board";

interface Position {
  x: number;
  y: number;
}

enum PieceColor {
  White = "white",
  Black = "black",
}

export type ChessPiece = {
  name: "king" | "queen" | "bishop" | "knight" | "rook" | "pawn";
  color: PieceColor;
  position: Position;
  image: string;
};

// Behavior / states
function App() {
  const initialWhitePieces: ChessPiece[] = [
    {
      name: "rook",
      color: PieceColor.White,
      position: { x: 1, y: 1 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg",
    },
    {
      name: "knight",
      color: PieceColor.White,
      position: { x: 1, y: 2 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg",
    },
    {
      name: "king",
      color: PieceColor.White,
      position: { x: 1, y: 5 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg",
    },
    {
      name: "queen",
      color: PieceColor.White,
      position: { x: 1, y: 4 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg",
    },
    {
      name: "bishop",
      color: PieceColor.White,
      position: { x: 1, y: 3 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg",
    },
    {
      name: "bishop",
      color: PieceColor.White,
      position: { x: 1, y: 6 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg",
    },
    {
      name: "knight",
      color: PieceColor.White,
      position: { x: 1, y: 7 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg",
    },
    {
      name: "rook",
      color: PieceColor.White,
      position: { x: 1, y: 8 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg",
    },
    {
      name: "pawn",
      color: PieceColor.White,
      position: { x: 2, y: 1 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg",
    },
    {
      name: "pawn",
      color: PieceColor.White,
      position: { x: 2, y: 2 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg",
    },
    {
      name: "pawn",
      color: PieceColor.White,
      position: { x: 2, y: 3 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg",
    },
    {
      name: "pawn",
      color: PieceColor.White,
      position: { x: 2, y: 4 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg",
    },
    {
      name: "pawn",
      color: PieceColor.White,
      position: { x: 2, y: 5 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg",
    },
    {
      name: "pawn",
      color: PieceColor.White,
      position: { x: 2, y: 6 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg",
    },
    {
      name: "pawn",
      color: PieceColor.White,
      position: { x: 2, y: 7 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg",
    },
    {
      name: "pawn",
      color: PieceColor.White,
      position: { x: 2, y: 8 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg",
    },
  ];

  const initialBlackPieces: ChessPiece[] = [
    {
      name: "king",
      color: PieceColor.Black,
      position: { x: 8, y: 5 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg",
    },
    {
      name: "queen",
      color: PieceColor.Black,
      position: { x: 8, y: 4 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg",
    },
    {
      name: "bishop",
      color: PieceColor.Black,
      position: { x: 8, y: 3 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg",
    },
    {
      name: "bishop",
      color: PieceColor.Black,
      position: { x: 8, y: 6 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg",
    },
    {
      name: "knight",
      color: PieceColor.Black,
      position: { x: 8, y: 2 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg",
    },
    {
      name: "knight",
      color: PieceColor.Black,
      position: { x: 8, y: 7 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg",
    },
    {
      name: "rook",
      color: PieceColor.Black,
      position: { x: 8, y: 1 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg",
    },
    {
      name: "rook",
      color: PieceColor.Black,
      position: { x: 8, y: 8 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg",
    },
    {
      name: "pawn",
      color: PieceColor.Black,
      position: { x: 7, y: 1 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg",
    },
    {
      name: "pawn",
      color: PieceColor.Black,
      position: { x: 7, y: 2 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg",
    },
    {
      name: "pawn",
      color: PieceColor.Black,
      position: { x: 7, y: 3 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg",
    },
    {
      name: "pawn",
      color: PieceColor.Black,
      position: { x: 7, y: 4 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg",
    },
    {
      name: "pawn",
      color: PieceColor.Black,
      position: { x: 7, y: 5 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg",
    },
    {
      name: "pawn",
      color: PieceColor.Black,
      position: { x: 7, y: 6 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg",
    },
    {
      name: "pawn",
      color: PieceColor.Black,
      position: { x: 7, y: 7 },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg",
    },
    {
      name: "pawn",
      color: PieceColor.Black,
      position: { x: 7, y: 8 },
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
