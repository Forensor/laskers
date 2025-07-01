import * as Role from "./role";
import * as Team from "./team";

/**
 * A single "man" of a {@link Piece}.
 */
export type Counter = { team: Team.Team; role: Role.Role };

export function toString(counter: Counter): string {
    if (counter.role === Role.Role.Officer) {
        return counter.team === Team.Team.White ? "W" : "B";
    } else {
        return counter.team === Team.Team.White ? "w" : "b";
    }
}

export function fromString(str: string): Counter | null {
    if (str === "W") {
        return { team: Team.Team.White, role: Role.Role.Officer };
    } else if (str === "B") {
        return { team: Team.Team.Black, role: Role.Role.Officer };
    } else if (str === "w") {
        return { team: Team.Team.White, role: Role.Role.Private };
    } else if (str === "b") {
        return { team: Team.Team.Black, role: Role.Role.Private };
    } else {
        // Anything else than "WBwb" is an invalid string representation of a counter
        return null;
    }
}
