import * as React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "../../styles/details.css";
import { Spinner } from "../Spinner";
import { MediaContext } from "../Store";
import "./DirectorDetails.css";

export default function DirectorDetails() {
  const context = React.useContext(MediaContext);
  const { directorName } = useParams();
  const directed = context.films.filter((e) =>
    e.director.includes(directorName)
  );

  const wpSummary = useFetch(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${directorName}`
  );

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

  document.title = `${directorName} - Director - MediaSheetViewer`;

  return (
    <>
      <div className="director">
        <div className="details-left">
          <div className="director-header">
            <h3>{directorName}</h3>
          </div>
          <div className="director-films">
            {directed.map((film) => (
              <span key={film.title}>
                <span>
                  <Link to={`/films/${film.id}`}>{film.title}</Link>
                </span>{" "}
                ({film.year})
              </span>
            ))}
          </div>
          {wpData ? (
            <div className="director-summary">{wpData.extract}</div>
          ) : null}
        </div>
        <div className="details-right">
          <div className="director-poster">
            {poster ? (
              <img
                className="director-poster-image"
                src={poster}
                alt="poster"
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
