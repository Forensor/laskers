import * as Counter from "./counter";
import type * as Role from "./role";
import type * as Team from "./team";

/**
 * A stack of {@link Counter}s.
 *
 * The head of the nonempty {@link Array} represents the topmost {@link Counter} of the
 * stack, which designs the {@link Team} and the {@link Role} of it.
 */
export type Piece = [Counter.Counter, ...Counter.Counter[]];

export function getRole(piece: Piece): Role.Role {
    return piece[0].role;
}

export function getTeam(piece: Piece): Team.Team {
    return piece[0].team;
}

export function convertToRole([topCounter, ...rest]: Piece, role: Role.Role): Piece {
    return [{ ...topCounter, role }, ...rest];
}

export function convertToTeam([topCounter, ...rest]: Piece, team: Team.Team): Piece {
    return [{ ...topCounter, team }, ...rest];
}

export function addCounterFromBelow(piece: Piece, counter: Counter.Counter): Piece {
    return [...piece, counter];
}

export function toString(piece: Piece): string {
    return piece.map(Counter.toString).join("");
}

export function fromString(str: string): Piece | null {
    // We get the string representation of a piece, which is a sequence of counters
    const counters = str.split("").map(Counter.fromString);

    if (!(counters.length > 0)) {
        // If the list is empty, the piece is invalid
        return null;
    }

    if (counters.some((counter) => counter === null)) {
        /* If any element in the list is null, the piece is invalid since it contains an 
        invalid counter */
        return null;
    }

    return counters as Piece;
}
