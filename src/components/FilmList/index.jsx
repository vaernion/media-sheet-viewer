import * as React from "react";
import { normalize } from "../../utils/utilities";
import { FieldHeader } from "../FieldHeader";
import { SearchForm } from "../SearchForm";
import { MediaContext } from "../Store";
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

  // keep current sorted films in state
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

  // filter films post-sort and store in state
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
    const searchStr = normalize(searchField);

    if (searchStr.startsWith("g:")) {
      return sortedFilms.filter(
        (film) =>
          film.genre.findIndex((genre) =>
            normalize(genre).includes(searchStr.replace("g:", ""))
          ) !== -1
      );
    } else if (searchStr.startsWith("y:")) {
      return sortedFilms.filter(
        (film) => film.year.toString() === searchStr.replace("y:", "")
      );
    } else {
      return sortedFilms.filter(
        (film) =>
          normalize(film.title).includes(searchStr) ||
          film.director.findIndex((director) =>
            normalize(director).includes(searchStr)
          ) !== -1
      );
    }
  };

  if (!filmsFiltered) return null;

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
              field="director"
              label="Director"
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
              field="franchise"
              label="Franchise"
              width="15%"
              sort={{ sortBy, isSortReverse }}
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
