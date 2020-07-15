import * as React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "../../styles/details.css";
import { Spinner } from "../Spinner";
import { MediaContext } from "../Store";
import "./FilmDetails.css";

export default function FilmDetails() {
  const films = React.useContext(MediaContext).films;
  const { filmId } = useParams();
  const film = films.find((e) => e.id === Number(filmId));
  const filmTitle = film ? film.title : null;

  const wpSummary = useFetch(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${filmTitle}`
  );

  if (!film) return `TV series not found with id ${filmId}`;
  if (!wpSummary || !wpSummary.response || wpSummary.isLoading)
    return <Spinner />;
  if (wpSummary.error) return `Error: ${wpSummary.error.message}`;

  const wpData =
    wpSummary.response.type === "disambiguation" ? {} : wpSummary.response;
  const poster = wpData.originalimage
    ? wpData.originalimage.source
    : wpData.thumbnail
    ? wpData.thumbnail.source
    : null;

  console.log(wpData);
  if (wpData.thumbnail && !wpData.originalimage) console.log("only thumbnail");

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
          {wpData ? <div className="film-summary">{wpData.extract}</div> : null}
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
