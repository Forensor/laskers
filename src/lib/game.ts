import * as Team from "./team";
import * as Board from "./board";
import type * as Fen from "./fen";

export type Game = {
    board: Board.Board;
    turn: Team.Team;
    numberOfPliesWithoutPromotionOrCapture: number;
    numberOfFullMoves: number;
};

export function toFen(game: Game): Fen.Fen {
    const fenBoard = Board.toString(game.board);

    const fenTurn = Team.toString(game.turn);

    const fenHalfMoveCounter = String(game.numberOfPliesWithoutPromotionOrCapture);

    const fenFullMoveNumber = String(game.numberOfFullMoves);

    return `${fenBoard} ${fenTurn} ${fenHalfMoveCounter} ${fenFullMoveNumber}`;
}

export function fromFen(fenStr: string): Game | null {
    const sanitizedFen = fenStr.replace(/\s+/g, " ").trim();

    const parts = sanitizedFen.split(" ");

    if (parts.length !== 4) {
        return null; // Invalid FEN format
    }

    const boardFen = parts[0];
    const turnFen = parts[1];
    const halfMoveCounterFen = parts[2];
    const fullMoveNumberFen = parts[3];

    if (isNaN(Number(fullMoveNumberFen)) || Number(fullMoveNumberFen) < 1) {
        return null; // Invalid full move number
    }

    if (isNaN(Number(halfMoveCounterFen)) || Number(halfMoveCounterFen) < 0) {
        return null; // Invalid half move counter
    }

    if (Team.fromString(turnFen || "") === null) {
        return null; // Invalid turn
    }

    if (Board.fromString(boardFen || "") === null) {
        return null; // Invalid board state
    }

    return {
        board: Board.fromString(boardFen as string),
        turn: Team.fromString(turnFen as string),
        numberOfPliesWithoutPromotionOrCapture: Number(halfMoveCounterFen),
        numberOfFullMoves: Number(fullMoveNumberFen)
    } as Game;
}
