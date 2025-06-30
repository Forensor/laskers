import "./Counter.css";
import { BoardComponent } from "./Board";
import * as Game from "../../lib/game";
import type { Orientation } from "../../lib/orientation";

type Config = { counterSize: number; orientation: Orientation };
type Props = { game: Game.Game; config: Config };

export const GameComponent = (props: Props) => {
    const className = `game`;

    return (
        <div className={className}>
            <BoardComponent
                board={props.game.board}
                config={{
                    counterSize: props.config.counterSize,
                    orientation: props.config.orientation
                }}
            />
            <div className="game-info">
                <p>Turn: {props.game.turn}</p>
                <p>FEN: {Game.toFen(props.game)}</p>
            </div>
        </div>
    );
};
