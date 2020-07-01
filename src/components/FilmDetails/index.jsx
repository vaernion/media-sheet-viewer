import * as React from "react";
import { useParams } from "react-router-dom";
import { MediaContext } from "../Store";

export default function FilmDetails() {
  const films = React.useContext(MediaContext).films;
  const { filmId } = useParams();
  const film = films.find((e) => e.id === Number(filmId));
  document.title = `${film.title} (${film.year}) - Film - MediaSheetViewer`;

  return (
    <>
      <div>
        <span>
          {film.id}--{film.title}
        </span>
        <span>{film.year}</span>
        <span>
          {film.director.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}
