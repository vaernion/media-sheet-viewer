import * as React from "react";
import { Link } from "react-router-dom";
import "./GamesList.css";

export const GameListItem = (props) => {
  return (
    <div
      className={`list-items ${props.index % 2 ? "" : "odd-index"}`}
      style={props.style}
    >
      <GameListItemMemo
        data={props.data}
        setSearchField={props.setSearchField}
      />
    </div>
  );
};

const GameListItemMemo = React.memo(GameListItemRaw);

function GameListItemRaw(props) {
  const game = props.data;
  const onclick = props.setSearchField;

  return (
    <>
      <span className="game-title">
        <Link to={`/games/${game.id}`}>{game.title}</Link> (
        <span
          className="game-year on-click"
          onClick={() => onclick("y:" + game.year)}
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
              onClick={() => onclick("g:" + name)}
            >
              {name}
            </span>
          </span>
        ))}
      </span>
      <span
        className="game-completed on-click"
        onClick={() => onclick(game.completed)}
      >
        {game.completed}
      </span>
      <span
        className="game-system on-click"
        onClick={() => onclick(game.system)}
      >
        {game.system}
      </span>
    </>
  );
}
