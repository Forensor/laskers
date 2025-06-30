import { Role } from "./role";
import { Team } from "./team";

/**
 * A single "man" of a {@link Piece}.
 */
export type Counter = { team: Team; role: Role };

export function toString(counter: Counter): string {
    if (counter.role === Role.Officer) {
        return counter.team === Team.White ? "W" : "B";
    } else {
        return counter.team === Team.White ? "w" : "b";
    }
}

export function fromString(str: string): Counter | null {
    if (str === "W") {
        return { team: Team.White, role: Role.Officer };
    } else if (str === "B") {
        return { team: Team.Black, role: Role.Officer };
    } else if (str === "w") {
        return { team: Team.White, role: Role.Private };
    } else if (str === "b") {
        return { team: Team.Black, role: Role.Private };
    } else {
        // Anything else than "WBwb" is an invalid string representation of a counter
        return null;
    }
}
