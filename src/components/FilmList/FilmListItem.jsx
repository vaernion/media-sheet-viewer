import * as React from "react";
import { Link } from "react-router-dom";
import "./filmsList.css";

export const FilmListItem = React.memo(FilmListItemRaw);

function FilmListItemRaw(props) {
  const film = props.film;

  return (
    <>
      <div className="list-items">
        <span className="film-title">
          <Link to={`/films/${film.id}`}>{film.title}</Link> (
          <span
            className="film-year on-click"
            onClick={() => props.setSearchField("y:" + film.year)}
          >
            {film.year}
          </span>
          )
        </span>
        <span className="film-director">
          {film.director.map((name, i) => (
            <span key={name}>
              <span>{i > 0 ? " & " : null}</span>
              <Link to={`/directors/${name}`}>{name}</Link>
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
                onClick={() => props.setSearchField("g:" + name)}
              >
                {name}
              </span>
            </span>
          ))}
        </span>
        <span
          className="film-franchise on-click"
          onClick={() => props.setSearchField(film.franchise)}
        >
          {film.franchise}
        </span>
      </div>
    </>
  );
}
