import * as React from "react";
import "../../styles/color.css";
import {
  gameGenresConfig,
  gameGenresPerYearsConfig,
  gameYearsConfig,
} from "./config";
import { Infobox } from "./Infobox";
import "./Stats.css";

export default function StatsGames() {
  document.title = "Games Stats - MediaSheetViewer";

  return (
    <>
      <div className="stats">
        <div className="stats-head">
          <h2 className="stats-title">Stats - Games</h2>
        </div>
        <div className="stats-body">
          <Infobox config={gameGenresPerYearsConfig} large />
          <Infobox config={gameGenresConfig} large />
          <Infobox config={gameYearsConfig} />
        </div>
      </div>
    </>
  );
}
