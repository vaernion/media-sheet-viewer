import * as React from "react";
import { Link } from "react-router-dom";
import "./TvList.css";

export const TvListItem = React.memo(TvListItemRaw);

function TvListItemRaw(props) {
  const tv = props.tv;

  return (
    <>
      <div className="list-items">
        <span className="tv-title">
          <Link to={`/tv/${tv.id}`}>{tv.title}</Link> (
          <span
            className="tv-year"
            onClick={() =>
              props.setSearchField("ys:" + tv.seasons[0].yearStart)
            }
          >
            {tv.seasons[0].yearStart}
          </span>
          -
          <span
            className="tv-year"
            onClick={() =>
              props.setSearchField(
                "ye:" + tv.seasons[tv.seasons.length - 1].yearEnd
              )
            }
          >
            {tv.seasons[tv.seasons.length - 1].yearEnd}
          </span>
          )
        </span>
        <span className="tv-creator">
          {tv.creator.map((name, i) => (
            <span key={name}>
              <span>{i > 0 ? " & " : null}</span>
              <Link to={`/directors/${name}`}>{name}</Link>
            </span>
          ))}
        </span>
        <span className="tv-genre">
          {tv.genre.map((name, i) => (
            <span key={name}>
              <span>{i > 0 ? " / " : null}</span>
              <span
                key={name}
                className="genre-name"
                onClick={() => props.setSearchField("g:" + name)}
              >
                {name}
              </span>
            </span>
          ))}
        </span>
      </div>
    </>
  );
}
