import React from "react";
import { createRoot } from "react-dom/client";
import * as Orientation from "./lib/orientation";
import * as GameComponent from "./features/board/Game";
import * as Game from "./lib/game";
import * as Fen from "./lib/fen";

const container = document.getElementById("root");

if (container) {
    const root = createRoot(container);

    root.render(
        <React.StrictMode>
            <div
                style={{
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <GameComponent.GameComponent
                    game={Game.fromFen(Fen.STARTING_FEN)!}
                    config={{
                        counterSize: 140,
                        orientation: Orientation.Orientation.Whiteside
                    }}
                ></GameComponent.GameComponent>
            </div>
        </React.StrictMode>
    );
} else {
    throw new Error(
        `Root element with ID 'root' was not found in the document. Ensure there is a 
        corresponding HTML element with the ID 'root' in your HTML file.`
    );
}
