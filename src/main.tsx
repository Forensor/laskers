import React from "react";
import { createRoot } from "react-dom/client";
import type { Board } from "./lib/board";
import type { Piece } from "./lib/piece";
import { DEFAULT_STARTING_TEAM, Team } from "./lib/team";
import { Role } from "./lib/role";
import { Orientation } from "./lib/orientation";
import { GameComponent } from "./features/board/Game";
import { fromFen } from "./lib/game";
import { STARTING_FEN } from "./lib/fen";

const container = document.getElementById("root");

if (container) {
    const root = createRoot(container);

    const examplePiece: Piece = [
        { team: Team.White, role: Role.Private },
        { team: Team.Black, role: Role.Private },
        { team: Team.White, role: Role.Officer },
        { team: Team.Black, role: Role.Officer },
        { team: Team.White, role: Role.Private },
        { team: Team.Black, role: Role.Private },
        { team: Team.White, role: Role.Officer },
        { team: Team.Black, role: Role.Officer }
    ];
    const examplePiece2: Piece = [{ team: Team.White, role: Role.Private }];
    const exampleBoard: Board = new Map();
    exampleBoard.set("S1", examplePiece);
    exampleBoard.set("S6", examplePiece);
    exampleBoard.set("S11", examplePiece);
    exampleBoard.set("S16", examplePiece);
    exampleBoard.set("S13", examplePiece);
    exampleBoard.set("S9", examplePiece);
    exampleBoard.set("S4", examplePiece);
    exampleBoard.set("S24", examplePiece);
    exampleBoard.set("S22", examplePiece2);

    root.render(
        <React.StrictMode>
            <GameComponent
                game={fromFen(STARTING_FEN)!}
                config={{ counterSize: 140, orientation: Orientation.Whiteside }}
            ></GameComponent>
        </React.StrictMode>
    );
} else {
    throw new Error(
        `Root element with ID 'root' was not found in the document. Ensure there is a 
        corresponding HTML element with the ID 'root' in your HTML file.`
    );
}
