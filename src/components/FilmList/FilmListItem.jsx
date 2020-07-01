import * as React from "react";
import { Link } from "react-router-dom";
import "./filmsList.css";

export function FilmListItem(props) {
  const film = props.film;
  return (
    <>
      <div className="filmListItem">
        <span className="filmTitle">
          <Link to={`films/${film.id}`}>
            {film.id}--{film.title}
          </Link>
        </span>
        <span className="filmYear">{film.year}</span>
        <span className="filmDirector">
          {film.director.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </span>
        <span className="filmGenre">
          {film.genre.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </span>
        <span className="filmFranchise">{film.franchise}</span>
      </div>
    </>
  );
}
