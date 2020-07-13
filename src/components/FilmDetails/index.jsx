import * as React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "../../styles/details.css";
import { Spinner } from "../Spinner";
import { MediaContext } from "../Store";
import "./FilmDetails.css";

const tmdbKey = "15d2ea6d0dc1d476efbca3eba2b9bbfb";

export default function FilmDetails() {
  const films = React.useContext(MediaContext).films;
  const { filmId } = useParams();
  const film = films.find((e) => e.id === Number(filmId));
  const filmTitle = film ? film.title : null;

  const movieDb = useFetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${tmdbKey}&query=${filmTitle}`
  );

  if (!film) return `Film not found with id ${filmId}`;
  if (!movieDb || !movieDb.response || movieDb.isLoading) return <Spinner />;
  if (movieDb.error) return `Error: ${movieDb.error.message}`;

  const result = movieDb.response.results[0]
    ? movieDb.response.results[0]
    : null;
  // console.log(result);

  const poster =
    result && result.poster_path
      ? `https://image.tmdb.org/t/p/w500/${result.poster_path}`
      : null;

  document.title = `${film.title} (${film.year}) - Film - MediaSheetViewer`;

  return (
    <>
      <div className="film">
        <div className="details-left">
          <div className="film-header">
            <h3 className="film-title">{film.title}</h3>
            {film.translatedTitle ? (
              <div className="film-translation">{film.translatedTitle}</div>
            ) : null}
            <span className="film-year">({film.year})</span>
          </div>
          <div className="film-director">
            Director:{" "}
            {film.director.map((name, i) => (
              <span key={name}>
                <span>{i > 0 ? " & " : null}</span>
                <span>
                  <Link to={`/directors/${name}`}>{name}</Link>
                </span>
              </span>
            ))}
          </div>
          <div className="film-genre">
            {film.genre.map((name, i) => (
              <span key={name}>
                <span>{i > 0 ? " / " : null}</span>
                <span>{name}</span>
              </span>
            ))}
          </div>
          <div className="film-franchise">{film.franchise}</div>
          {result ? (
            <div className="film-summary">{result.overview}</div>
          ) : null}
        </div>
        <div className="details-right">
          <div className="film-poster">
            {poster ? (
              <img className="film-poster-image" src={poster} alt="poster" />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
