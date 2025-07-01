import type * as Board from "../../lib/board";
import type * as Orientation from "../../lib/orientation";
import "./Board.css";
import * as PieceComponent from "./Piece";

type Config = { counterSize: number; orientation: Orientation.Orientation };
type Props = { board: Board.Board; config: Config };

/**
 * The {@link Board} view. It renders the {@link Piece}s over the board and allows the
 * users to move them. Its size is determined by the size of a single {@link Counter}.
 * Element position has to be absolute or relative for the pieces to
 * be positioned correctly.
 *
 * @param props The {@link Board} to render and some configuration options.
 */
export const BoardComponent = (props: Props) => {
    /**
     * Board size is determined by the size of a counter in pixels and the squares per
     * row/column
     */
    const boardSize = props.config.counterSize * 7;
    const className = `board ${props.config.orientation.toLowerCase()}`;
    // Convert the board `Map` to an `Array` to be able to map over it
    const board = Array.from(props.board);
    return (
        <div className={className} style={{ height: boardSize, width: boardSize }}>
            {board.map(([coord, piece]) => {
                return (
                    <PieceComponent.PieceComponent
                        piece={piece}
                        config={{
                            counterSize: props.config.counterSize,
                            coord: coord,
                            orientation: props.config.orientation
                        }}
                        key={coord}
                    />
                );
            })}
        </div>
    );
};
