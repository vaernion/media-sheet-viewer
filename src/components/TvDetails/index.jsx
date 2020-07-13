import * as React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "../../styles/details.css";
import { Spinner } from "../Spinner";
import { MediaContext } from "../Store";
import "./TvDetails.css";

const tmdbKey = "15d2ea6d0dc1d476efbca3eba2b9bbfb";

export default function TvDetails() {
  const context = React.useContext(MediaContext);
  const { tvId } = useParams();
  const tv = context.tv.find((e) => e.id === Number(tvId));
  const tvTitle = tv ? tv.title : null;

  const movieDb = useFetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${tmdbKey}&query=${tvTitle}`
  );

  if (!tv) return `tv not found with id ${tvId}`;
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

  document.title = `${tv.title} (${tv.seasons[0].yearStart}-${
    tv.seasons[tv.seasons.length - 1].yearEnd
  }) - TV - MediaSheetViewer`;

  console.log(tv);
  return (
    <>
      <div className="tv">
        <div className="details-left">
          <div className="tv-header">
            <h3>{tv.title}</h3>
            <span className="tv-year">
              ({tv.seasons[0].yearStart}-
              {tv.seasons[tv.seasons.length - 1].yearEnd})
            </span>
          </div>
          <div className="tv-creator">
            Creator:{" "}
            {tv.creator.map((name, i) => (
              <span key={name}>
                <span>{i > 0 ? " & " : null}</span>
                <span>
                  <Link to={`/directors/${name}`}>{name}</Link>
                </span>
              </span>
            ))}
          </div>
          <div className="tv-genre">
            {tv.genre.map((name, i) => (
              <span key={name}>
                <span>{i > 0 ? " / " : null}</span>
                <span>{name}</span>
              </span>
            ))}
          </div>
          <div className="tv-length">{`${tv.seasons.length} ${
            tv.seasons.length > 1 ? "seasons" : "season"
          }, ${tv.seasons.reduce(
            (sum, season) => sum + season.episodes,
            0
          )} episodes`}</div>
          <div className="tv-hours">
            {Number((tv.minutesTotal / 60).toFixed(2))} hours
          </div>
          {result ? <div className="tv-summary">{result.overview}</div> : null}
        </div>
        <div className="details-right">
          <div className="tv-poster">
            {poster ? (
              <img className="tv-poster-image" src={poster} alt="poster" />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
