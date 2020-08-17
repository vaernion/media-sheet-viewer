import * as React from "react";
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  List,
  ListRowRenderer,
  WindowScroller
} from "react-virtualized";
import "../../styles/lists.css";
import { filterFilms } from "../../utils/filters";
import { FieldHeader } from "../FieldHeader";
import { SearchForm } from "../SearchForm";
import { DispatchContext, StateContext } from "../Store";
import { mediaSheet } from "../Store/mediaSheet";
import { FilmListItem } from "./FilmListItem";

const cellCache = new CellMeasurerCache({
  fixedWidth: true,
  defaultHeight: 50,
});

export default function FilmList() {
  const dispatch = React.useContext(DispatchContext);
  const state = React.useContext(StateContext);
  const [searchField, setSearchField] = React.useState(state.filterFilms);

  document.title = `${mediaSheet.films.length} Films - MediaSheetViewer`;

  // persist filter
  React.useEffect(() => {
    dispatch({ type: "FILTER_FILMS", payload: searchField });
  }, [searchField, dispatch]);

  const handleSort = (field: string) => {
    if (field === state.sortFilms) {
      dispatch({ type: "SORT_REVERSE_FILMS" });
    } else {
      dispatch({ type: "SORT_FILMS", payload: field });
    }
  };

  const filmsSortedLocal =
    mediaSheet.filmsSorted[
      state.sortFilms + (state.sortReverseFilms ? "Desc" : "Asc")
    ];
  const filmsFiltered = filterFilms(filmsSortedLocal, searchField);

  const rowRenderer: ListRowRenderer = ({ index, style, parent }) => {
    const data = filmsFiltered[index];
    return (
      <CellMeasurer
        key={data.id}
        cache={cellCache}
        parent={parent}
        columnIndex={0}
        rowIndex={index}
      >
        <FilmListItem
          index={index}
          data={data}
          setSearchField={setSearchField}
          style={style}
        />
      </CellMeasurer>
    );
  };

  return (
    <>
      <div className="films">
        <div className="films-head">
          <SearchForm
            value={searchField}
            setValue={setSearchField}
            placeholder="star wars | g:drama | hitchcock | y:2010"
          />
          <div className="headers">
            <FieldHeader
              field="sortTitle"
              label="Title"
              width="20%"
              primary
              sort={{
                sortBy: state.sortFilms,
                isSortReverse: state.sortReverseFilms,
              }}
              onclick={handleSort}
            />
            <FieldHeader
              field="year"
              label="Year"
              width="15%"
              sort={{
                sortBy: state.sortFilms,
                isSortReverse: state.sortReverseFilms,
              }}
              onclick={handleSort}
            />
            <FieldHeader
              field="director"
              label="Director"
              width="25%"
              sort={{
                sortBy: state.sortFilms,
                isSortReverse: state.sortReverseFilms,
              }}
              onclick={handleSort}
            />
            <FieldHeader
              field="genre"
              label="Genre"
              width="35%"
              sort={{
                sortBy: state.sortFilms,
                isSortReverse: state.sortReverseFilms,
              }}
            />
            <FieldHeader
              field="franchise"
              label="Franchise"
              width="15%"
              sort={{
                sortBy: state.sortFilms,
                isSortReverse: state.sortReverseFilms,
              }}
              onclick={handleSort}
            />
          </div>
        </div>
        <div className="films-body">
          <WindowScroller>
            {({ height, scrollTop, registerChild, onChildScroll }) => (
              <AutoSizer disableHeight>
                {({ width }) => (
                  <div ref={registerChild}>
                    <List
                      autoHeight
                      height={height}
                      width={width}
                      deferredMeasurementCache={cellCache}
                      scrollTop={scrollTop}
                      onScroll={onChildScroll}
                      overscanRowCount={30}
                      rowCount={filmsFiltered.length}
                      rowHeight={cellCache.rowHeight}
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
