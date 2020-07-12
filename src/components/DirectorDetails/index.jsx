import * as React from "react";
import { Link, useParams } from "react-router-dom";
import { MediaContext } from "../Store";
import "./DirectorDetails.css";

export default function DirectorDetails() {
  const context = React.useContext(MediaContext);
  const { directorName } = useParams();
  const directed = context.films.filter((e) =>
    e.director.includes(directorName)
  );

  document.title = `${directorName} - Director - MediaSheetViewer`;

  return (
    <>
      <div className="director">
        <div className="director-name">
          <h2>{directorName}</h2>
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
        <span></span>
      </div>
    </>
  );
}
