import * as Coord from "./coord";
import * as Piece from "./piece";

/**  Game position represented by a {@link Map}.
 *
 * Any {@link Coord} not present in the {@link Map} means that the square is empty.
 */
export type Board = Map<Coord.Coord, Piece.Piece>;

export function toString(board: Board): string {
    const coordsByRank = Object.values(Coord.COORDS_BY_RANK);

    const fenBoard = coordsByRank
        .map((coords: Coord.Coord[]) => {
            return coords
                .map((coord: Coord.Coord) => {
                    const square = board.get(coord);
                    return square ? Piece.toString(square) : "";
                })
                .join(":");
        })
        .join("/");

    return fenBoard;
}

export function fromString(fenBoard: string): Board | null {
    const board = new Map();

    const ranks = fenBoard.split("/");

    if (ranks.length !== 7) {
        return null; // Invalid FEN board format
    }

    Object.values(Coord.COORDS_BY_RANK).forEach(
        (coords: Coord.Coord[], rankIndex: number) => {
            ranks[rankIndex]!.split(":").forEach(
                (square: string, squareIndex: number) => {
                    if (Piece.fromString(square) !== null) {
                        board.set(coords[squareIndex], Piece.fromString(square));
                    }
                }
            );
        }
    );

    return board;
}
