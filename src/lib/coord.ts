export const ALL_COORDS = [
    "S1",
    "S2",
    "S3",
    "S4",
    "S5",
    "S6",
    "S7",
    "S8",
    "S9",
    "S10",
    "S11",
    "S12",
    "S13",
    "S14",
    "S15",
    "S16",
    "S17",
    "S18",
    "S19",
    "S20",
    "S21",
    "S22",
    "S23",
    "S24",
    "S25"
] as const;

export const COORDS_BY_RANK: { [key: string]: Coord[] } = {
    R7: ["S22", "S23", "S24", "S25"],
    R6: ["S19", "S20", "S21"],
    R5: ["S15", "S16", "S17", "S18"],
    R4: ["S12", "S13", "S14"],
    R3: ["S8", "S9", "S10", "S11"],
    R2: ["S5", "S6", "S7"],
    R1: ["S1", "S2", "S3", "S4"]
};

/**
 * Position code for the {@link Piece}s over the {@link Board}.
 *
 * This follows the usual [draughts board's coordinates distribution](https://pjb.com.au/laska/laskers_rules.html).
 */
export type Coord = (typeof ALL_COORDS)[number];
