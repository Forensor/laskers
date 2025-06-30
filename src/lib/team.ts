/**
 * The two sides of the match.
 *
 * `White` always starts first.
 */
export const enum Team {
    White = "White",
    Black = "Black"
}

export function opposite(team: Team): Team {
    return team === Team.Black ? Team.White : Team.Black;
}

export function toString(team: Team): string {
    return team === Team.White ? "w" : "b";
}

export function fromString(str: string): Team | null {
    switch (str) {
        case "w":
            return Team.White;
        case "b":
            return Team.Black;
        default:
            return null;
    }
}

export const DEFAULT_STARTING_TEAM: Team = Team.White;
