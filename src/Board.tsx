import { useEffect, useState } from "react";
import { chessPiece } from "./App";

type CellProps = {
    index: number;
    position: {
        x: number;
        y: number;
    };
    chessPiece: chessPiece | undefined;
}

function Cell(props: CellProps) {
    return (
        <div
            className={`flex relative items-center justify-center ${props.index % 2 ? 'bg-slate-300' : 'bg-slate-700'}`}
        >
            <p className="absolute top-0 left-0 text-xs text-red-600">{ props.position.x }, { props.position.y }</p>
            <img className=" w-2/3" src={props.chessPiece?.image} alt="" />
        </div>
    )
}

type BoardProps = {
    pieces: chessPiece[];
}

function Board(props: BoardProps) {
    const ROWS = 8;
    const COLS = 8;

    const [cells] = useState<CellProps[]>(() => {
        const cellsArray: CellProps[] = [];
        
        for (let rowIndex = 1; rowIndex <= ROWS; rowIndex++) {
            for (let colIndex = 1; colIndex <= COLS; colIndex++) {
                cellsArray.push({
                    index: rowIndex % 2 ? colIndex : colIndex + 1,
                    position: { x: rowIndex, y: colIndex },
                    chessPiece: props.pieces.find(piece => piece.position.x === rowIndex && piece.position.y === colIndex),
                });

            }
        }
        
        return cellsArray;
    });

    useEffect(() => {
        console.log(cells);
    }, [cells]);

    return (
        <div className="w-full max-w-[800px] h-[800px] grid grid-cols-8 grid-rows-8">
            {cells.map((cell, index) => (
                <Cell 
                    key={index} 
                    index={cell.index} 
                    position={cell.position}
                    chessPiece={cell.chessPiece}
                />
            ))}
        </div>
    );
}

export default Board;