import { getPieceMove } from "./App";

// Types and interfaces if not already imported
type Position = { x: number; y: number };
type Color = 'white' | 'black';
type PieceName = 'king' | 'queen' | 'bishop' | 'knight' | 'rook' | 'pawn';

interface ChessPiece {
    name: PieceName;
    color: Color;
    position: Position;
    moves: Position[],
    image: string;
}

// Test helper to visualize the board and moves
const visualizeBoard = (_piece: ChessPiece, board: ChessPiece[], moves: Position[]) => {
    const grid: string[][] = Array(8).fill(null).map(() => Array(8).fill('·'));
    
    // Add piece positions
    board.forEach(p => {
        grid[8 - p.position.y][p.position.x - 1] = getPieceSymbol(p);
    });
    
    // Add possible moves
    moves.forEach(move => {
        if (grid[8 - move.y][move.x - 1] === '·') {
            grid[8 - move.y][move.x - 1] = '○';
        }
    });
    
    // Print board
    console.log('  1 2 3 4 5 6 7 8');
    grid.forEach((row, i) => {
        console.log(`${8 - i} ${row.join(' ')}`);
    });
};

const getPieceSymbol = (piece: ChessPiece): string => {
    const symbols: Record<PieceName, { white: string; black: string }> = {
        king: { white: '♔', black: '♚' },
        queen: { white: '♕', black: '♛' },
        bishop: { white: '♗', black: '♝' },
        knight: { white: '♘', black: '♞' },
        rook: { white: '♖', black: '♜' },
        pawn: { white: '♙', black: '♟' }
    };
    return symbols[piece.name][piece.color];
};

// Test scenarios
const testPieceMoves = () => {
    // Test 1: Knight in the middle of the board
    console.log('\nTest 1: Knight in the middle of the board');
    const knight: ChessPiece = {
        name: 'knight',
        color: 'white',
        position: { x: 4, y: 4 },
        moves: [],
        image: ""
    };
    const knightMoves = getPieceMove(knight, [knight]);
    visualizeBoard(knight, [knight], knightMoves);
    console.log('Expected: 8 possible moves');
    console.log('Actual:', knightMoves.length, 'moves');

    // Test 2: Rook with blocking pieces
    console.log('\nTest 2: Rook with blocking pieces');
    const rook: ChessPiece = {
        name: 'rook',
        color: 'white',
        position: { x: 4, y: 4 },
        moves: [],
        image: ""
    };
    const blockingPieces: ChessPiece[] = [
        {
            name: 'pawn', color: 'white', position: { x: 4, y: 6 },
            moves: [],
            image: ""
        },
        {
            name: 'pawn', color: 'black', position: { x: 4, y: 2 },
            moves: [],
            image: ""
        }
    ];
    const rookMoves = getPieceMove(rook, [rook, ...blockingPieces]);
    visualizeBoard(rook, [rook, ...blockingPieces], rookMoves);
    console.log('Expected: Moves should stop at blocking pieces');

    // Test 3: Pawn initial position
    console.log('\nTest 3: Pawn initial position');
    const pawn: ChessPiece = {
        name: 'pawn',
        color: 'white',
        position: { x: 4, y: 2 },
        moves: [],
        image: ""
    };
    const pawnMoves = getPieceMove(pawn, [pawn]);
    visualizeBoard(pawn, [pawn], pawnMoves);
    console.log('Expected: 2 moves forward from initial position');

    // Test 4: Queen with capture opportunity
    console.log('\nTest 4: Queen with capture opportunity');
    const queen: ChessPiece = {
        name: 'queen',
        color: 'white',
        position: { x: 4, y: 4 },
        moves: [],
        image: ""
    };
    const captureTargets: ChessPiece[] = [
        {
            name: 'pawn', color: 'black', position: { x: 7, y: 7 },
            moves: [],
            image: ""
        },
        {
            name: 'pawn', color: 'white', position: { x: 2, y: 2 },
            moves: [],
            image: ""
        }
    ];
    const queenMoves = getPieceMove(queen, [queen, ...captureTargets]);
    visualizeBoard(queen, [queen, ...captureTargets], queenMoves);
    console.log('Expected: Should be able to capture black pawn but stop at white pawn');
};

// Additional test cases for edge scenarios
const testEdgeCases = () => {
    // Test 5: Piece at board edge
    console.log('\nTest 5: Piece at board edge');
    const edgeRook: ChessPiece = {
        name: 'rook',
        color: 'white',
        position: { x: 1, y: 1 },
        moves: [],
        image: ""
    };
    const edgeMoves = getPieceMove(edgeRook, [edgeRook]);
    visualizeBoard(edgeRook, [edgeRook], edgeMoves);
    console.log('Expected: Moves should stay within board boundaries');

    // Test 6: Surrounded piece
    console.log('\nTest 6: Surrounded piece');
    const surroundedKing: ChessPiece = {
        name: 'king',
        color: 'white',
        position: { x: 4, y: 4 },
        moves: [],
        image: ""
    };
    const surroundingPieces: ChessPiece[] = [
        {
            name: 'pawn', color: 'white', position: { x: 3, y: 3 },
            moves: [],
            image: ""
        },
        {
            name: 'pawn', color: 'white', position: { x: 4, y: 3 },
            moves: [],
            image: ""
        },
        {
            name: 'pawn', color: 'black', position: { x: 5, y: 3 },
            moves: [],
            image: ""
        },
    ];
    const kingMoves = getPieceMove(surroundedKing, [surroundedKing, ...surroundingPieces]);
    visualizeBoard(surroundedKing, [surroundedKing, ...surroundingPieces], kingMoves);
    console.log('Expected: Should show valid moves and capture opportunities');
};

// Run all tests
console.log('Running chess movement tests...');
testPieceMoves();
testEdgeCases();