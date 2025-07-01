import type * as Coord from "../../lib/coord";
import type * as Counter from "../../lib/counter";
import type * as Piece from "../../lib/piece";
import * as CounterComponent from "./Counter";
import "./Piece.css";
import type * as Orientation from "../../lib/orientation";

type Config = {
    counterSize: number;
    coord: Coord.Coord;
    orientation: Orientation.Orientation;
};
type Props = { piece: Piece.Piece; config: Config };

/**
 * The {@link Piece} view. It renders the {@link Counter}s stack on a single square.
 * Element position has to be absolute or relative for the pieces to
 * be positioned correctly.
 *
 * @param props The {@link Piece} to render, the {@link Coord} where its placed, etc.
 */
export const PieceComponent = (props: Props) => {
    const className = `piece ${props.piece[0].team.toLowerCase()} ${props.config.coord}`;
    const { top, left } = getTopAndLeftValues({
        coord: props.config.coord,
        orientation: props.config.orientation,
        counterSize: props.config.counterSize
    });
    return (
        <div
            className={className}
            style={{
                height: props.config.counterSize,
                width: props.config.counterSize,
                top: top,
                left: left
            }}
        >
            {props.piece.map((counter: Counter.Counter, position: number) => {
                const positionOnStack = props.piece.length - 1 - position;
                return (
                    <CounterComponent.CounterComponent
                        counter={counter}
                        config={{ size: props.config.counterSize, positionOnStack }}
                        key={positionOnStack}
                    />
                );
            })}
        </div>
    );
};

function getTopAndLeftValues({
    coord,
    orientation,
    counterSize
}: {
    coord: Coord.Coord;
    orientation: Orientation.Orientation;
    counterSize: number;
}): { top: number; left: number } {
    // We get the values that will move the piece to the right position over the board.
    const coordOrientationToValuesMap: {
        [key in Orientation.Orientation]: {
            [key in Coord.Coord]: { top: number; left: number };
        };
    } = {
        Whiteside: {
            S1: {
                top: counterSize * 6,
                left: 0
            },
            S2: {
                top: counterSize * 6,
                left: counterSize * 2
            },
            S3: {
                top: counterSize * 6,
                left: counterSize * 4
            },
            S4: {
                top: counterSize * 6,
                left: counterSize * 6
            },
            S5: {
                top: counterSize * 5,
                left: counterSize
            },
            S6: {
                top: counterSize * 5,
                left: counterSize * 3
            },
            S7: {
                top: counterSize * 5,
                left: counterSize * 5
            },
            S8: {
                top: counterSize * 4,
                left: 0
            },
            S9: {
                top: counterSize * 4,
                left: counterSize * 2
            },
            S10: {
                top: counterSize * 4,
                left: counterSize * 4
            },
            S11: {
                top: counterSize * 4,
                left: counterSize * 6
            },
            S12: {
                top: counterSize * 3,
                left: counterSize
            },
            S13: {
                top: counterSize * 3,
                left: counterSize * 3
            },
            S14: {
                top: counterSize * 3,
                left: counterSize * 5
            },
            S15: {
                top: counterSize * 2,
                left: 0
            },
            S16: {
                top: counterSize * 2,
                left: counterSize * 2
            },
            S17: {
                top: counterSize * 2,
                left: counterSize * 4
            },
            S18: {
                top: counterSize * 2,
                left: counterSize * 6
            },
            S19: {
                top: counterSize,
                left: counterSize
            },
            S20: {
                top: counterSize,
                left: counterSize * 3
            },
            S21: {
                top: counterSize,
                left: counterSize * 5
            },
            S22: {
                top: 0,
                left: 0
            },
            S23: {
                top: 0,
                left: counterSize * 2
            },
            S24: {
                top: 0,
                left: counterSize * 4
            },
            S25: {
                top: 0,
                left: counterSize * 6
            }
        },
        Blackside: {
            S1: {
                top: 0,
                left: counterSize * 6
            },
            S2: {
                top: 0,
                left: counterSize * 4
            },
            S3: {
                top: 0,
                left: counterSize * 2
            },
            S4: {
                top: 0,
                left: 0
            },
            S5: {
                top: counterSize,
                left: counterSize * 5
            },
            S6: {
                top: counterSize,
                left: counterSize * 3
            },
            S7: {
                top: counterSize,
                left: counterSize
            },
            S8: {
                top: counterSize * 2,
                left: counterSize * 6
            },
            S9: {
                top: counterSize * 2,
                left: counterSize * 4
            },
            S10: {
                top: counterSize * 2,
                left: counterSize * 2
            },
            S11: {
                top: counterSize * 2,
                left: 0
            },
            S12: {
                top: counterSize * 3,
                left: counterSize * 5
            },
            S13: {
                top: counterSize * 3,
                left: counterSize * 3
            },
            S14: {
                top: counterSize * 3,
                left: counterSize
            },
            S15: {
                top: counterSize * 4,
                left: counterSize * 6
            },
            S16: {
                top: counterSize * 4,
                left: counterSize * 4
            },
            S17: {
                top: counterSize * 4,
                left: counterSize * 2
            },
            S18: {
                top: counterSize * 4,
                left: 0
            },
            S19: {
                top: counterSize * 5,
                left: counterSize * 5
            },
            S20: {
                top: counterSize * 5,
                left: counterSize * 3
            },
            S21: {
                top: counterSize * 5,
                left: counterSize
            },
            S22: {
                top: counterSize * 6,
                left: counterSize * 6
            },
            S23: {
                top: counterSize * 6,
                left: counterSize * counterSize * 4
            },
            S24: {
                top: counterSize * 6,
                left: counterSize * 2
            },
            S25: {
                top: counterSize * 6,
                left: 0
            }
        }
    };
    return coordOrientationToValuesMap[orientation][coord];
}
