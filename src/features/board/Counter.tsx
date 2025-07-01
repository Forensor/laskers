import type * as Counter from "../../lib/counter";
import "./Counter.css";

type Config = { size: number; positionOnStack: number };
type Props = { counter: Counter.Counter; config: Config };

export const DEFAULT_SIZE = 70;

export const CounterComponent = (props: Props) => {
    const className = `counter ${props.counter.team.toLowerCase()} ${props.counter.role.toLowerCase()}`;
    /**
     * The height of the counter's edge. I.e.:
     *
     * ╔═╗ <- Top of the counter
     *
     * ║═║ <- Edge of the counter
     *
     * We use this to calculate how to stack the counters on top of each other.
     */
    const counterEdgeHeight = props.config.size / 7;
    /**
     * Based on its position on the stack.
     */
    const bottomValue = props.config.positionOnStack * counterEdgeHeight;
    return (
        <div
            className={className}
            style={{
                height: props.config.size,
                width: props.config.size,
                bottom: bottomValue,
                zIndex: props.config.positionOnStack
            }}
        ></div>
    );
};
