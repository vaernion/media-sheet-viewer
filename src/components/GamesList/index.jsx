import * as React from "react";
import "../../styles/lists.css";
import { normalize } from "../../utils/utilities";
import { FieldHeader } from "../FieldHeader";
import { SearchForm } from "../SearchForm";
import { MediaContext } from "../Store";
import "./GamesList.css";
import { GamesListItem } from "./GamesListItem";

export default function GamesList() {
  const context = React.useContext(MediaContext);

  const [sortBy, setSortBy] = React.useState("sortTitle");
  const [isSortReverse, setIsSortReverse] = React.useState(false);
  const [searchField, setSearchField] = React.useState("");
  const [gamesSortedLocal, setGamesSortedLocal] = React.useState(null);
  const [gamesFiltered, setGamesFiltered] = React.useState(null);

  document.title = `${context.games.length} Games - MediaSheetViewer`;

  // keep current sorted games in state
  React.useEffect(() => {
    setGamesSortedLocal(
      (() => {
        const sorted = context.gamesSorted;
        switch (sortBy) {
          case "sortTitle":
            return isSortReverse ? sorted.titleDesc : sorted.titleAsc;
          case "year":
            return isSortReverse ? sorted.yearDesc : sorted.yearAsc;
          case "developer":
            return isSortReverse ? sorted.developerDesc : sorted.developerAsc;
          case "completed":
            return isSortReverse ? sorted.completedDesc : sorted.completedAsc;
          case "system":
            return isSortReverse ? sorted.systemDesc : sorted.systemAsc;
          default:
            return context.games;
        }
      })()
    );
  }, [sortBy, isSortReverse, context.games, context.gamesSorted]);

  // filter games post-sort and store in state
  React.useEffect(() => {
    if (!gamesSortedLocal) return;
    setGamesFiltered(filterGames(gamesSortedLocal, searchField));
  }, [gamesSortedLocal, searchField]);

  const handleSort = (field) => {
    if (field === sortBy) {
      setIsSortReverse(!isSortReverse);
    } else {
      setIsSortReverse(false);
      setSortBy(field);
    }
  };

  const filterGames = (sortedGames, searchField) => {
    const searchStr = normalize(searchField);

    if (searchStr.startsWith("g:")) {
      return sortedGames.filter(
        (game) =>
          game.genre.findIndex((genre) =>
            normalize(genre).includes(searchStr.replace("g:", ""))
          ) !== -1
      );
    } else if (searchStr.startsWith("y:")) {
      return sortedGames.filter(
        (game) => game.year.toString() === searchStr.replace("y:", "")
      );
    } else {
      return sortedGames.filter(
        (game) =>
          normalize(game.title).includes(searchStr) ||
          game.developer.findIndex((developer) =>
            normalize(developer).includes(searchStr)
          ) !== -1 ||
          normalize(game.system).includes(searchStr)
      );
    }
  };

  if (!gamesFiltered) return null;

  return (
    <>
      <div className="games">
        <div className="games-head">
          <SearchForm
            value={searchField}
            setValue={setSearchField}
            placeholder="examples: deus ex | g:stealth | arkane | y:1998"
          />
          <div className="headers">
            <FieldHeader
              field="sortTitle"
              label="Title"
              width="20%"
              sort={{ sortBy, isSortReverse }}
              onclick={handleSort}
            />
            <FieldHeader
              field="year"
              label="Year"
              width="10%"
              sort={{ sortBy, isSortReverse }}
              onclick={handleSort}
            />
            <FieldHeader
              field="developer"
              label="Developer"
              width="25%"
              sort={{ sortBy, isSortReverse }}
              onclick={handleSort}
            />
            <FieldHeader
              field="genre"
              label="Genre"
              width="30%"
              sort={{ sortBy, isSortReverse }}
            />
            <FieldHeader
              field="completed"
              label="Completed"
              width="10%"
              sort={{ sortBy, isSortReverse }}
              onclick={handleSort}
            />
            <FieldHeader
              field="system"
              label="System"
              width="10%"
              sort={{ sortBy, isSortReverse }}
              onclick={handleSort}
            />
          </div>
        </div>
        <div className="games-body">
          {gamesFiltered.map((game) => (
            <GamesListItem
              key={game.id}
              game={game}
              setSearchField={setSearchField}
            />
          ))}
        </div>
      </div>
    </>
  );
}
