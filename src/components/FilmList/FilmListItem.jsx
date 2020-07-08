import * as React from "react";
import { Link } from "react-router-dom";
import "./filmsList.css";

export function FilmListItem(props) {
  const film = props.film;

  return (
    <>
      <div className="filmListItem">
        <span className="filmTitle">
          <Link to={`/films/${film.id}`}>
            {/* {film.id}-- */}
            {film.title}
          </Link>
        </span>
        <span
          className="filmYear"
          onClick={() => props.setSearchField("y:" + film.year)}
        >
          {film.year}
        </span>
        <span className="filmDirector">
          {film.director.map((name) => (
            <Link
              key={name}
              className="filmDirectorName"
              to={`/directors/${name}`}
            >
              {name}
            </Link>
          ))}
        </span>
        <span className="filmGenre">
          {film.genre.map((name) => (
            <span
              key={name}
              className="filmGenreName"
              onClick={() => props.setSearchField("g:" + name)}
            >
              {name}
            </span>
          ))}
        </span>
        <span className="filmFranchise">{film.franchise}</span>
      </div>
    </>
  );
}
