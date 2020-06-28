import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { MediaContext } from "../../App";

export function FilmDetails() {
  const films = useContext(MediaContext).films;
  const { filmId } = useParams();

  const film = films.find((e) => e.id === Number(filmId));
  document.title = `MediaSheet - Film - ${film.title}`;

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
