import * as React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "../../styles/details.css";
import { Spinner } from "../Spinner";
import { MediaContext } from "../Store";
import "./TvDetails.css";

export default function TvDetails() {
  const context = React.useContext(MediaContext);
  const { tvId } = useParams();
  const tv = context.tv.find((e) => e.id === Number(tvId));
  const tvTitle = tv ? tv.title : null;

  const wpSummary = useFetch(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${tvTitle}`
  );

  if (!tv) return `TV series not found with id ${tvId}`;
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

  document.title = `${tv.title} (${tv.seasons[0].yearStart}-${
    tv.seasons[tv.seasons.length - 1].yearEnd
  }) - TV - MediaSheetViewer`;

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
          {wpData ? <div className="tv-summary">{wpData.extract}</div> : null}
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
