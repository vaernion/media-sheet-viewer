import * as React from "react";
import { Link } from "react-router-dom";
import { Game } from "../../classes/Game";
import "./GamesList.css";

type Props = {
  data: Game;
  setSearchField: (field: string) => void;
  index: number;
  style: React.CSSProperties;
};

export const GameListItem = (props: Props) => {
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

type RawProps = {
  data: Game;
  setSearchField: (field: string) => void;
};

function GameListItemRaw(props: RawProps) {
  const game = props.data;
  const onclick = props.setSearchField;

  return (
    <>
      <span className="game-title">
        <Link to={`/games/${game.id}`}>{game.name}</Link> (
        <span
          className="game-year on-click"
          onClick={() => onclick("y:" + game.year)}
        >
          {game.year}
        </span>
        )
      </span>
      <span className="game-developer">
        {game.creator.map((name, i) => (
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
        onClick={() => onclick("c:" + game.completed)}
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
