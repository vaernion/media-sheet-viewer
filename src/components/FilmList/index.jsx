import * as React from "react";
import { SearchForm } from "../SearchForm";
import { MediaContext } from "../Store";
import { FieldHeader } from "./FieldHeader";
import { FilmListItem } from "./FilmListItem";
import "./filmsList.css";

export default function FilmList() {
  const context = React.useContext(MediaContext);

  const [sortBy, setSortBy] = React.useState("sortTitle");
  const [sortReverse, setSortReverse] = React.useState(false);
  const [searchField, setSearchField] = React.useState("");
  const [sortedFilms, setSortedFilms] = React.useState(null);

  document.title = `${context.films.length} Films - MediaSheetViewer`;

  // keep current sorted array in state for efficiency
  React.useEffect(() => {
    setSortedFilms(
      (() => {
        const obj = context.filmsSorted;
        switch (sortBy) {
          case "sortTitle":
            return sortReverse ? obj.titleDesc : obj.titleAsc;
          case "year":
            return sortReverse ? obj.yearDesc : obj.yearAsc;
          case "director":
            return sortReverse ? obj.directorDesc : obj.directorAsc;
          case "franchise":
            return sortReverse ? obj.franchiseDesc : obj.franchiseAsc;
          default:
            return context.films;
        }
      })()
    );
  }, [sortBy, sortReverse, context.films, context.filmsSorted]);

  const handleSort = (field) => {
    if (field === sortBy) {
      setSortReverse(!sortReverse);
    } else {
      setSortReverse(false);
      setSortBy(field);
    }
  };

  const filterFilms = (sortedFilms, searchField) => {
    if (searchField.toLowerCase().startsWith("g:")) {
      return sortedFilms.filter(
        (film) =>
          film.genre.findIndex((genre) =>
            genre
              .toLowerCase()
              .includes(searchField.toLowerCase().replace("g:", ""))
          ) !== -1
      );
    } else if (searchField.toLowerCase().startsWith("y:")) {
      return sortedFilms.filter(
        (film) => film.year.toString() === searchField.replace("y:", "")
      );
    } else {
      return sortedFilms.filter(
        (film) =>
          film.title.toLowerCase().includes(searchField.toLowerCase()) ||
          film.director.findIndex((director) =>
            director.toLowerCase().includes(searchField.toLowerCase())
          ) !== -1
      );
    }
  };

  // slight optimization
  const decideIfWeSortFilms = (sortedFilms, searchField) => {
    if (searchField.length >= 2) {
      // if (true) {
      return filterFilms(sortedFilms, searchField);
    } else {
      return sortedFilms;
    }
  };

  if (!sortedFilms) return null;
  const films = decideIfWeSortFilms(sortedFilms, searchField);

  return (
    <>
      <div className="filmHeaderContainer">
        <div className="searchWrapper">
          <SearchForm
            value={searchField}
            setValue={setSearchField}
            placeholder="examples: star wars | g:drama | hitchcock | y:2010"
          />
        </div>
        <div className="fieldHeadersContainer">
          <FieldHeader
            field="sortTitle"
            label="Title"
            onclick={handleSort}
            sort={{ sortBy, sortReverse }}
          />
          <FieldHeader
            field="year"
            label="Year"
            onclick={handleSort}
            sort={{ sortBy, sortReverse }}
          />
          <FieldHeader
            field="director"
            label="Director"
            onclick={handleSort}
            sort={{ sortBy, sortReverse }}
          />
          <FieldHeader
            field="genre"
            label="Genre"
            sort={{ sortBy, sortReverse }}
          />
          <FieldHeader
            field="franchise"
            label="Franchise"
            onclick={handleSort}
            sort={{ sortBy, sortReverse }}
          />
        </div>
      </div>
      <div className="filmBodyContainer">
        {films
          // .filter((e) => e.id > 800 && e.id < 1000)
          .map((film) => (
            <FilmListItem
              key={film.id}
              film={film}
              setSearchField={setSearchField}
            />
          ))}
      </div>
    </>
  );
}
