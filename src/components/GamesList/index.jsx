import * as React from "react";
import { AutoSizer, List, WindowScroller } from "react-virtualized";
import "../../styles/lists.css";
import { filterGames } from "../../utils/filters.js";
import { FieldHeader } from "../FieldHeader";
import { SearchForm } from "../SearchForm";
import { DispatchContext, StateContext } from "../Store";
import { mediaSheet } from "../Store/mediaSheet";
import { GameListItem } from "./GameListItem";
import "./GamesList.css";

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

  const rowRenderer = ({ index, key, style }) => {
    const game = gamesFiltered[index];
    return (
      <GameListItem
        key={key}
        index={index}
        data={game}
        setSearchField={setSearchField}
        style={style}
      />
    );
  };

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
          <WindowScroller>
            {({ height, scrollTop, registerChild, onChildScroll }) => (
              <AutoSizer disableHeight>
                {({ width }) => (
                  <div ref={registerChild}>
                    <List
                      autoHeight
                      height={height}
                      width={width}
                      scrollTop={scrollTop}
                      onScroll={onChildScroll}
                      overscanRowCount={50}
                      rowCount={gamesFiltered.length}
                      rowHeight={22}
                      rowRenderer={rowRenderer}
                    />
                  </div>
                )}
              </AutoSizer>
            )}
          </WindowScroller>
        </div>
      </div>
    </>
  );
}
