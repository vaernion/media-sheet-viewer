import * as React from "react";
import "../../styles/color.css";
import {
  filmGenresConfig,
  filmGenresPerYearsConfig,
  filmYearsConfig,
} from "./config";
import { Infobox } from "./Infobox";
import "./Stats.css";

export default function StatsFilms() {
  document.title = "Film Stats - MediaSheetViewer";

  return (
    <>
      <div className="stats">
        <div className="stats-head">
          <h2 className="stats-title">Stats - Films</h2>
        </div>
        <div className="stats-body">
          <Infobox config={filmGenresPerYearsConfig} large />
          <Infobox config={filmGenresConfig} />
          <Infobox config={filmYearsConfig} />
        </div>
      </div>
    </>
  );
}
