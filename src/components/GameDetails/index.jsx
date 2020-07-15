import * as React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "../../styles/details.css";
import { Spinner } from "../Spinner";
import { MediaContext } from "../Store";
import "./GameDetails.css";

export default function GameDetails() {
  const games = React.useContext(MediaContext).games;
  const { gameId } = useParams();
  const game = games.find((e) => e.id === Number(gameId));
  const gameTitle = game ? game.title : null;

  const wpSummary = useFetch(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${gameTitle}`
  );

  if (!game) return `Game not found with id ${gameId}`;
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

  document.title = `${game.title} (${game.year}) - Game - MediaSheetViewer`;

  return (
    <>
      <div className="game">
        <div className="details-left">
          <div className="game-header">
            <h3 className="game-title">{game.title}</h3>
            <span className="game-year">({game.year})</span>
          </div>
          <div className="game-developer">
            Developer:{" "}
            {game.developer.map((name, i) => (
              <span key={name}>
                <span>{i > 0 ? " & " : null}</span>
                <span>
                  <Link to={`/directors/${name}`}>{name}</Link>
                </span>
              </span>
            ))}
          </div>
          <div className="game-genre">
            {game.genre.map((name, i) => (
              <span key={name}>
                <span>{i > 0 ? " / " : null}</span>
                <span>{name}</span>
              </span>
            ))}
          </div>
          <div className="game-system">{game.system}</div>
          {wpData ? <div className="game-summary">{wpData.extract}</div> : null}
        </div>
        <div className="details-right">
          <div className="game-poster">
            {poster ? (
              <img className="game-poster-image" src={poster} alt="poster" />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
