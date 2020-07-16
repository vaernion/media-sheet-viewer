import * as React from "react";
import { Link } from "react-router-dom";
import "./TvList.css";

export const TvListItem = React.memo(TvListItemRaw);

function TvListItemRaw(props) {
  const tv = props.tv;
  const setSearchField = props.setSearchField;

  return (
    <>
      <div className="list-items unvirtualized">
        <span className="tv-title">
          <Link to={`/tv/${tv.id}`}>{tv.title}</Link> (
          <span
            className="tv-year on-click"
            onClick={() => setSearchField("ys:" + tv.seasons[0].yearStart)}
          >
            {tv.seasons[0].yearStart}
          </span>
          -
          <span
            className="tv-year on-click"
            onClick={() =>
              setSearchField("ye:" + tv.seasons[tv.seasons.length - 1].yearEnd)
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
              <Link to={`/creators/${name}`}>{name}</Link>
            </span>
          ))}
        </span>
        <span className="tv-genre">
          {tv.genre.map((name, i) => (
            <span key={name}>
              <span>{i > 0 ? " / " : null}</span>
              <span
                key={name}
                className="genre-name on-click"
                onClick={() => setSearchField("g:" + name)}
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
