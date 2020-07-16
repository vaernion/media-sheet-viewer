import * as React from "react";
import { Link } from "react-router-dom";
import "./filmsList.css";

export const FilmListItem = (props) => {
  return (
    <div
      className={`list-items ${props.index % 2 ? "" : "odd-index"}`}
      style={props.style}
    >
      <FilmListItemMemo
        data={props.data}
        setSearchField={props.setSearchField}
      />
    </div>
  );
};

const FilmListItemMemo = React.memo(FilmListItemRaw);

function FilmListItemRaw(props) {
  const film = props.data;
  const onclick = props.setSearchField;

  return (
    <>
      <span className="film-title">
        <Link to={`/films/${film.id}`}>{film.title}</Link> (
        <span
          className="film-year on-click"
          onClick={() => onclick("y:" + film.year)}
        >
          {film.year}
        </span>
        )
      </span>
      <span className="film-director">
        {film.director.map((name, i) => (
          <span key={name}>
            <span>{i > 0 ? " & " : null}</span>
            <Link to={`/creators/${name}`}>{name}</Link>
          </span>
        ))}
      </span>
      <span className="film-genre">
        {film.genre.map((name, i) => (
          <span key={name}>
            <span>{i > 0 ? " / " : null}</span>
            <span
              key={name}
              className="genre-name on-click"
              onClick={() => onclick("g:" + name)}
            >
              {name}
            </span>
          </span>
        ))}
      </span>
      <span
        className="film-franchise on-click"
        onClick={() => onclick(film.franchise)}
      >
        {film.franchise}
      </span>
      {/* </div> */}
    </>
  );
}
