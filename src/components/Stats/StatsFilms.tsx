import * as React from "react";
import "../../styles/color.css";
import {
  filmGenresConfig,
  filmGenresYearsConfig,
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
          <Infobox config={filmGenresConfig} />
          <Infobox config={filmYearsConfig} />
          <Infobox config={filmGenresYearsConfig} large />
        </div>
      </div>
    </>
  );
}
