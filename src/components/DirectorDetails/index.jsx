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

  if (wpSummary.error) return `Error: ${wpSummary.error.message}`;
  if (!wpSummary || !wpSummary.response || wpSummary.isLoading)
    return <Spinner />;

  // console.log(wpImg.response);
  const thumbnail = wpSummary.response.thumbnail
    ? wpSummary.response.thumbnail.source
    : null;

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
        </div>
        <div className="details-right">
          <div className="director-thumbnail">
            {thumbnail ? (
              <img
                className="director-thumbnail-image"
                src={thumbnail}
                alt="thumbnail"
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
