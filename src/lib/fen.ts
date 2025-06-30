export const STARTING_FEN: Fen = "b:b:b:b/b:b:b/b:b:b:b/::/w:w:w:w/w:w:w/w:w:w:w w 0 1";

/**
 * A string representation of the game state in Forsyth-Edwards Notation (FEN).
 *
 * An example of a FEN string is:
 * `b:b:b:b/b:b:b/b:b:b:b/::/w:w:w:w/w:w:w/w:w:w:w w  0  1`
 * \_____________________________________________/\_/\_/\_/
 *                        1                        2  3  4
 *
 * 1. The board state, with each rank separated by a `/` and squares within ranks
 *    separated by `:`.
 * 2. The turn indicator, where `w` means White's turn and `b` means Black's turn.
 * 3. Half-move counter for the
 *    [50 move rule](https://en.wikipedia.org/wiki/Fifty-move_rule).
 * 4. Number of total moves (turns) played.
 */
export type Fen = string;
