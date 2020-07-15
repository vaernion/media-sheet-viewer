import * as React from "react";
import "../../styles/lists.css";
import { filterGames } from "../../utils/filters.js";
import { FieldHeader } from "../FieldHeader";
import { SearchForm } from "../SearchForm";
import { DispatchContext, StateContext } from "../Store";
import { mediaSheet } from "../Store/mediaSheet";
import "./GamesList.css";
import { GamesListItem } from "./GamesListItem";

export default function GamesList() {
  const dispatch = React.useContext(DispatchContext);
  const state = React.useContext(StateContext);
  const [searchField, setSearchField] = React.useState(state.filterGames);

  document.title = `${mediaSheet.games.length} Games - MediaSheetViewer`;

  // persist filter
  React.useEffect(() => {
    dispatch({ type: "FILTER_GAMES", payload: searchField });
  }, [searchField, dispatch]);

  const handleSort = (field) => {
    if (field === state.sortGames) {
      dispatch({ type: "SORT_REVERSE_GAMES" });
    } else {
      dispatch({ type: "SORT_GAMES", payload: field });
    }
  };

  const gamesSortedLocal =
    mediaSheet.gamesSorted[
      state.sortGames + (state.sortReverseGames ? "Desc" : "Asc")
    ];
  const gamesFiltered = filterGames(gamesSortedLocal, searchField);

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
              sort={{
                sortBy: state.sortGames,
                isSortReverse: state.sortReverseGames,
              }}
              onclick={handleSort}
            />
            <FieldHeader
              field="year"
              label="Year"
              width="10%"
              sort={{
                sortBy: state.sortGames,
                isSortReverse: state.sortReverseGames,
              }}
              onclick={handleSort}
            />
            <FieldHeader
              field="developer"
              label="Developer"
              width="25%"
              sort={{
                sortBy: state.sortGames,
                isSortReverse: state.sortReverseGames,
              }}
              onclick={handleSort}
            />
            <FieldHeader
              field="genre"
              label="Genre"
              width="30%"
              sort={{
                sortBy: state.sortGames,
                isSortReverse: state.sortReverseGames,
              }}
            />
            <FieldHeader
              field="completed"
              label="Completed"
              width="10%"
              sort={{
                sortBy: state.sortGames,
                isSortReverse: state.sortReverseGames,
              }}
              onclick={handleSort}
            />
            <FieldHeader
              field="system"
              label="System"
              width="10%"
              sort={{
                sortBy: state.sortGames,
                isSortReverse: state.sortReverseGames,
              }}
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
