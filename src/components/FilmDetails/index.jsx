import * as React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
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
  if (movieDb.error) return `Error: ${movieDb.error.message}`;
  if (!movieDb || !movieDb.response) return <Spinner />;
  if (movieDb.response.results.length === 0) return `${film.title} not found`;

  const result = movieDb.response.results[0];
  console.log(result);

  const posterPath = result.poster_path;
  const poster = `http://image.tmdb.org/t/p/w500/${posterPath}`;

  document.title = `${film.title} (${film.year}) - Film - MediaSheetViewer`;

  return (
    <>
      <div className="film">
        <div className="left">
          <div className="film-title">
            {film.title} (<span className="film-year">{film.year}</span>)
          </div>
          <div className="film-franchise"></div>
          <div className="film-director">
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
          <div className="film-summary">{result.overview}</div>
        </div>
        <div className="right">
          <div className="film-poster">
            <img className="film-poster-image" src={poster} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
