import * as React from "react";
import "../../styles/lists.css";
import { filterFilms } from "../../utils/filters";
import { FieldHeader } from "../FieldHeader";
import { SearchForm } from "../SearchForm";
import { DispatchContext, StateContext } from "../Store";
import { mediaSheet } from "../Store/mediaSheet";
import { FilmListItem } from "./FilmListItem";
import "./filmsList.css";

export default function FilmList() {
  const dispatch = React.useContext(DispatchContext);
  const state = React.useContext(StateContext);
  const [searchField, setSearchField] = React.useState(state.filterFilms);

  document.title = `${mediaSheet.films.length} Films - MediaSheetViewer`;

  // persist filter
  React.useEffect(() => {
    dispatch({ type: "FILTER_FILMS", payload: searchField });
  }, [searchField, dispatch]);

  const handleSort = (field) => {
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

  return (
    <>
      <div className="films">
        <div className="films-head">
          <SearchForm
            value={searchField}
            setValue={setSearchField}
            placeholder="examples: star wars | g:drama | hitchcock | y:2010"
          />
          <div className="headers">
            <FieldHeader
              field="sortTitle"
              label="Title"
              width="20%"
              sort={{
                sortBy: state.sortFilms,
                isSortReverse: state.sortReverseFilms,
              }}
              onclick={handleSort}
            />
            <FieldHeader
              field="year"
              label="Year"
              width="10%"
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
              width="30%"
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
          {filmsFiltered
            // .filter((e) => e.id > 500 && e.id < 600)
            .map((film) => (
              <FilmListItem
                key={film.id}
                film={film}
                setSearchField={setSearchField}
              />
            ))}
        </div>
      </div>
    </>
  );
}
