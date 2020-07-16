import * as React from "react";
import { Link } from "react-router-dom";
import "./GamesList.css";

// export const GameListItem = React.memo(GameListItemRaw);

export function GameListItem(props) {
  const game = props.data;
  const setSearchField = props.setSearchField;

  return (
    <>
      <div
        className={`list-items ${props.index % 2 ? "" : "odd-index"}`}
        style={props.style}
      >
        <span className="game-title">
          <Link to={`/games/${game.id}`}>{game.title}</Link> (
          <span
            className="game-year on-click"
            onClick={() => setSearchField("y:" + game.year)}
          >
            {game.year}
          </span>
          )
        </span>
        <span className="game-developer">
          {game.developer.map((name, i) => (
            <span key={name}>
              <span>{i > 0 ? " & " : null}</span>
              <Link to={`/creators/${name}`}>{name}</Link>
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
                onClick={() => setSearchField("g:" + name)}
              >
                {name}
              </span>
            </span>
          ))}
        </span>
        <span
          className="game-completed on-click"
          onClick={() => setSearchField(game.completed)}
        >
          {game.completed}
        </span>
        <span
          className="game-system on-click"
          onClick={() => setSearchField(game.system)}
        >
          {game.system}
        </span>
      </div>
    </>
  );
}
