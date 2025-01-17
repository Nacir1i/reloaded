import { useState } from "react";
import { ChessPiece } from "./App";

const getColumnLetter = (col: number): string => {
  return String.fromCharCode(96 + col);
};

type CellProps = {
  index: number;
  position: {
    x: number;
    y: number;
  };
  ChessPiece: ChessPiece | undefined;
};

function Cell(props: CellProps) {
  const isFirstColumn = props.position.y === 1;
  const isLastRow = props.position.x === 1;
  // fixed white/black colors
  return (
    <div
      className={`flex relative items-center justify-center ${
        props.index % 2 ? "bg-slate-700" : "bg-slate-300"
      }`}
    >
      <p className="absolute top-1 left-2 text-xl text-red-600">
        {isFirstColumn && props.position.x}
      </p>
      <p className="absolute bottom-1 right-2 text-2xl text-red-600">
        {isLastRow && getColumnLetter(props.position.y)}
      </p>
      <img className=" w-2/3" src={props.ChessPiece?.image} alt="" />
    </div>
  );
}

type BoardProps = {
  pieces: ChessPiece[];
};

function Board(props: BoardProps) {
  const ROWS = 8;
  const COLS = 8;

  const [cells] = useState<CellProps[]>(() => {
    const cellsArray: CellProps[] = [];
    // fixed the x & y axis
    for (let rowIndex = ROWS; rowIndex >= 1; rowIndex--) {
      for (let colIndex = 1; colIndex <= COLS; colIndex++) {
        cellsArray.push({
          index: colIndex % 2 ? rowIndex : rowIndex + 1,
          position: { x: rowIndex, y: colIndex },
          ChessPiece: props.pieces.find(
            (piece) =>
              piece.position.x === rowIndex && piece.position.y === colIndex
          ),
        });
      }
    }

    return cellsArray;
  });

  return (
    <div className="w-full max-w-[800px] h-[800px] grid grid-cols-8 grid-rows-8">
      {cells.map((cell, index) => (
        <Cell
          key={index}
          index={cell.index}
          position={cell.position}
          ChessPiece={cell.ChessPiece}
        />
      ))}
    </div>
  );
}

export default Board;
