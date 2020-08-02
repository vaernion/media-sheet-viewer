import * as React from "react";
import "../../styles/color.css";
import { mediaSheet } from "../Store/mediaSheet";
import "./Stats.css";

export default function Stats() {
  document.title = "Stats - MediaSheetViewer";

  return (
    <>
      <div className="stats">
        <h2>Stats</h2>
        <div className="stats-summary">
          <span className="summary-box">
            <span className="summary-header">Films</span>
            <span className="summary-content">{mediaSheet.films.length}</span>
          </span>
          <span className="summary-box">
            <span className="summary-header">TV</span>
            <span className="summary-content">{mediaSheet.tv.length}</span>
          </span>
          <span className="summary-box">
            <span className="summary-header">Games</span>
            <span className="summary-content">{mediaSheet.games.length}</span>
          </span>
          <span className="summary-box">
            <span className="summary-header">Directors</span>
            <span className="summary-content">
              {mediaSheet.directors.length}
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
