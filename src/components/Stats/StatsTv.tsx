import * as React from "react";
import "../../styles/color.css";
import {
  tvGenresConfig,
  tvGenresPerYearsConfig,
  tvYearsConfig,
} from "./config";
import { Infobox } from "./Infobox";
import "./Stats.css";

export default function StatsTv() {
  document.title = "TV Stats - MediaSheetViewer";

  return (
    <>
      <div className="stats">
        <div className="stats-head">
          <h2 className="stats-title">Stats - TV</h2>
        </div>
        <div className="stats-body">
          <Infobox config={tvGenresPerYearsConfig} large />
          <Infobox config={tvGenresConfig} />
          <Infobox config={tvYearsConfig} />
        </div>
      </div>
    </>
  );
}
