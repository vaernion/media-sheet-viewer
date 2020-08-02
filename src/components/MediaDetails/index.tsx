import * as React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import imdbLogo from "../../images/imdb-logo.png";
import steamLogo from "../../images/Steam_icon_logo.svg";
import wpLogo from "../../images/Wikipedia's_W.svg";
import {
  capitalizeFirstLetter,
  formatYear,
  getCreations,
  isMedia,
} from "../../utils/utilities";
import { Spinner } from "../Spinner";
import { mediaSheet } from "../Store/mediaSheet";
import "./MediaDetails.css";

export default function MediaDetails() {
  const mediaType = useLocation().pathname.split("/")[1];
  const { id } = useParams();

  // creators route uses names instead of ids, so only allow names from the db
  const media = (() => {
    if (mediaType === "creators") {
      return mediaSheet.creators.find((e) => e.name === id);
    } else if (mediaType === "films") {
      return mediaSheet.films.find((e) => e.id === Number(id));
    } else if (mediaType === "tv") {
      return mediaSheet.tv.find((e) => e.id === Number(id));
    } else if (mediaType === "games") {
      return mediaSheet.games.find((e) => e.id === Number(id));
    }
  })();

  const mediaTitle = media ? media.name : null;
  const titleYear = media ? formatYear(media) : null;

  document.title = media
    ? `${mediaTitle} ${
        isMedia(media.type) ? titleYear : ""
      } - ${capitalizeFirstLetter(mediaType)} - MediaSheetViewer`
    : `${mediaType.slice(0, -1)} not found - MediaSheetViewer`;

  // ***** wikipedia api, only used for media-poster and media-summary
  const wpSummary = useFetch(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${mediaTitle}`
  );

  // return must be after hooks
  if (!media) {
    return (
      <div>
        {mediaType.slice(0, -1)} not found with{" "}
        {mediaType === "creators" ? "name" : "id"} {id};
      </div>
    );
  }
  if (wpSummary.error) {
    return <div>Error: {wpSummary.error?.message}</div>;
  }
  if (wpSummary.isLoading || !wpSummary.response) {
    return <Spinner />;
  }

  const wpData =
    wpSummary.response && wpSummary.response.type === "standard"
      ? wpSummary.response
      : null;
  const poster =
    !!wpData && wpData.originalimage ? wpData.originalimage.source : null;
  // ***** wikipedia api end

  // all types so far can be found on imdb
  const imdbUrl = `https://www.imdb.com/find?q=${mediaTitle}`;

  // should use api and search for app from the huge json of all apps
  const steamUrl =
    mediaType === "games"
      ? `https://store.steampowered.com/search/?term=${mediaTitle}`
      : null;

  // creations
  const created = getCreations(media.name, mediaSheet);

  return (
    <>
      <div className="media">
        <div className="details-left">
          <div className="media-header">
            <h3 className="media-title">{mediaTitle}</h3>
            {"translatedTitle" in media ? (
              <div className="media-translation">{media.translatedTitle}</div>
            ) : null}
            {titleYear ? <span className="media-year">{titleYear}</span> : null}
          </div>

          {isMedia(mediaType) && "creator" in media ? (
            <div className="media-creators">
              <span className="creator-prefix">
                {mediaType === "films" ? "Director:" : ""}
                {mediaType === "tv" ? "Creator:" : ""}
                {mediaType === "games" ? "Developer:" : ""}
              </span>
              {media.creator.map((name, i) => (
                <span key={name}>
                  {i > 0 ? <span> & </span> : null}
                  <span>
                    <Link to={`/creators/${name}`}>{name}</Link>
                  </span>
                </span>
              ))}
            </div>
          ) : null}

          {isMedia(mediaType) && "genre" in media ? (
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
                        {work.name}
                      </Link>
                    </span>
                    <span className="work-year">{formatYear(work)}</span>
                  </span>
                );
              })}
            </div>
          ) : null}

          {"system" in media ? (
            <div className="media-system">{media.system}</div>
          ) : null}
          {"franchise" in media ? (
            <div className="media-franchise">{media.franchise}</div>
          ) : null}

          {mediaType === "tv" && "seasons" in media ? (
            <>
              <div className="tv-length">{`${media.seasons.length} ${
                media.seasons.length > 1 ? "seasons" : "season"
              }, ${media.seasons.reduce(
                (sum, season) => sum + season.episodes,
                0
              )} episodes`}</div>
              <div className="tv-hours">
                {Number((media.minutesTotal / 60).toFixed(2))} hours
              </div>
            </>
          ) : null}

          {wpData ? (
            <div className="media-summary">{wpData.extract}</div>
          ) : null}

          <div className="media-links">
            {wpData ? (
              <span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={wpData.content_urls.desktop.page}
                >
                  <img src={wpLogo} alt="Wikipedia" />
                </a>
              </span>
            ) : null}
            {imdbUrl ? (
              <span>
                <a target="_blank" rel="noopener noreferrer" href={imdbUrl}>
                  <img src={imdbLogo} alt="IMDb" />
                </a>
              </span>
            ) : null}
            {steamUrl ? (
              <span>
                <a target="_blank" rel="noopener noreferrer" href={steamUrl}>
                  <img src={steamLogo} alt="Steam" />
                </a>
              </span>
            ) : null}
          </div>
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
