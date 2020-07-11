import * as React from "react";
import { SearchForm } from "../SearchForm";
import { MediaContext } from "../Store";
import { FieldHeader } from "./FieldHeader";
import { FilmListItem } from "./FilmListItem";
import "./filmsList.css";

export default function FilmList() {
  const context = React.useContext(MediaContext);

  const [sortBy, setSortBy] = React.useState("sortTitle");
  const [isSortReverse, setIsSortReverse] = React.useState(false);
  const [searchField, setSearchField] = React.useState("");
  const [filmsSortedLocal, setFilmsSortedLocal] = React.useState(null);
  const [filmsFiltered, setFilmsFiltered] = React.useState(null);

  document.title = `${context.films.length} Films - MediaSheetViewer`;

  // keep current sorted array in state
  React.useEffect(() => {
    setFilmsSortedLocal(
      (() => {
        const sorted = context.filmsSorted;
        switch (sortBy) {
          case "sortTitle":
            return isSortReverse ? sorted.titleDesc : sorted.titleAsc;
          case "year":
            return isSortReverse ? sorted.yearDesc : sorted.yearAsc;
          case "director":
            return isSortReverse ? sorted.directorDesc : sorted.directorAsc;
          case "franchise":
            return isSortReverse ? sorted.franchiseDesc : sorted.franchiseAsc;
          default:
            return context.films;
        }
      })()
    );
  }, [sortBy, isSortReverse, context.films, context.filmsSorted]);

  // keep current filtered films in state
  React.useEffect(() => {
    if (!filmsSortedLocal) return;
    setFilmsFiltered(filterFilms(filmsSortedLocal, searchField));
  }, [filmsSortedLocal, searchField]);

  const handleSort = (field) => {
    if (field === sortBy) {
      setIsSortReverse(!isSortReverse);
    } else {
      setIsSortReverse(false);
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

  if (!filmsFiltered) return null;

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
            sort={{ sortBy, isSortReverse }}
          />
          <FieldHeader
            field="year"
            label="Year"
            onclick={handleSort}
            sort={{ sortBy, isSortReverse }}
          />
          <FieldHeader
            field="director"
            label="Director"
            onclick={handleSort}
            sort={{ sortBy, isSortReverse }}
          />
          <FieldHeader
            field="genre"
            label="Genre"
            sort={{ sortBy, isSortReverse }}
          />
          <FieldHeader
            field="franchise"
            label="Franchise"
            onclick={handleSort}
            sort={{ sortBy, isSortReverse }}
          />
        </div>
      </div>
      <div className="filmBodyContainer">
        {filmsFiltered
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
