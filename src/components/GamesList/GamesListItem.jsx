import * as React from "react";
import { Link } from "react-router-dom";
import "./GamesList.css";

export const GamesListItem = React.memo(GamesListItemRaw);

function GamesListItemRaw(props) {
  const game = props.game;

  return (
    <>
      <div className="list-items">
        <span className="game-title">
          <Link to={`/games/${game.id}`}>{game.title}</Link> (
          <span
            className="game-year on-click"
            onClick={() => props.setSearchField("y:" + game.year)}
          >
            {game.year}
          </span>
          )
        </span>
        <span className="game-developer">
          {game.developer.map((name, i) => (
            <span key={name}>
              <span>{i > 0 ? " & " : null}</span>
              <Link to={`/directors/${name}`}>{name}</Link>
            </span>
          ))}
        </span>
        <span className="game-genre">
          {game.genre.map((name, i) => (
            <span key={name}>
              <span>{i > 0 ? " / " : null}</span>
              <span
                key={name}
                className="genre-name on-click"
                onClick={() => props.setSearchField("g:" + name)}
              >
                {name}
              </span>
            </span>
          ))}
        </span>
        <span
          className="game-completed on-click"
          onClick={() => props.setSearchField(game.completed)}
        >
          {game.completed}
        </span>
        <span
          className="game-system on-click"
          onClick={() => props.setSearchField(game.system)}
        >
          {game.system}
        </span>
      </div>
    </>
  );
}
