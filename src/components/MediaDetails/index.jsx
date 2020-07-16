import * as React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import {
  capitalizeFirstLetter,
  formatYear,
  getCreations,
  isMedia,
} from "../../utils/utilities";
import { Spinner } from "../Spinner";
import { mediaSheet } from "../Store/mediaSheet";
import "./MediaDetails.css";

const creators = {
  films: "director",
  tv: "creator",
  games: "developer",
};

export default function MediaDetails() {
  const mediaType = useLocation().pathname.split("/")[1];
  const { id } = useParams();

  // creators route uses names instead of ids, so only allow names from the db
  const media =
    mediaType === "creators"
      ? mediaSheet.creators.find((e) => e.name === id)
      : mediaSheet[mediaType].find((e) => e.id === Number(id));

  // creator class uses name instead of title for now
  const mediaTitle = media ? (media.title ? media.title : media.name) : null;

  // title formatting
  const titleYear = formatYear(media);

  document.title = `${mediaTitle} ${
    isMedia(media) ? titleYear : ""
  } - ${capitalizeFirstLetter(mediaType)} - MediaSheetViewer`;

  // ***** wikipedia api, only used for media-poster and media-summary
  const wpSummary = useFetch(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${mediaTitle}`
  );

  // return must be after hooks
  if (!media) {
    return `${mediaType} not found with ${
      mediaType === "creators" ? "name" : "id"
    } ${id}`;
  }
  if (!wpSummary || !wpSummary.response || wpSummary.isLoading) {
    return <Spinner />;
  }
  if (wpSummary.error) {
    return `Error: ${wpSummary.error.message}`;
  }

  const wpData =
    wpSummary.response && wpSummary.response.type !== "disambiguation"
      ? wpSummary.response
      : {};
  const poster = wpData.originalimage
    ? wpData.originalimage.source
    : wpData.thumbnail
    ? wpData.thumbnail.source
    : null;
  // ***** wikipedia api end

  // creations
  const created = getCreations(media.name, mediaSheet);

  return (
    <>
      <div className="media">
        <div className="details-left">
          <div className="media-header">
            <h3 className="media-title">{mediaTitle}</h3>
            {media.translatedTitle ? (
              <div className="media-translation">{media.translatedTitle}</div>
            ) : null}
            {titleYear ? <span className="media-year">{titleYear}</span> : null}
          </div>

          {isMedia(mediaType) ? (
            <div className="media-creators">
              {media[creators[mediaType]].map((name, i) => (
                <span key={name}>
                  <span>{i > 0 ? " & " : null}</span>
                  <span>
                    <Link to={`/creators/${name}`}>{name}</Link>
                  </span>
                </span>
              ))}
            </div>
          ) : null}

          {isMedia(mediaType) ? (
            <div className="media-genre">
              {media.genre.map((name, i) => (
                <span key={name}>
                  <span>{i > 0 ? " / " : null}</span>
                  <span>{name}</span>
                </span>
              ))}
            </div>
          ) : null}

          {created ? (
            <div className="media-works">
              {created.map((work) => {
                return (
                  <span key={work.id}>
                    <span className="work-name">
                      <Link
                        to={`/${work.type}${work.type === "tv" ? "" : "s"}/${
                          work.id
                        }`}
                      >
                        {work.title}
                      </Link>
                    </span>
                    <span className="work-year">{formatYear(work)}</span>
                  </span>
                );
              })}
            </div>
          ) : null}

          {media.system ? (
            <div className="media-system">{media.system}</div>
          ) : null}
          {media.franchise ? (
            <div className="media-franchise">{media.franchise}</div>
          ) : null}
          {wpData ? (
            <div className="media-summary">{wpData.extract}</div>
          ) : null}
        </div>

        <div className="details-right">
          <div className="media-poster">
            {poster ? (
              <img className="media-poster-image" src={poster} alt="poster" />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}