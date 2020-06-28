import React from "react";
import { MediaContext } from "../../App.js";
import { FilmListItem } from "./FilmListItem";
import "./filmsList.css";
import { SearchForm } from "./SearchForm.jsx";

export function FilmsList() {
  document.title = "MediaSheet - Films";
  const context = React.useContext(MediaContext);
  // console.log("context", context);

  const [sortBy, setSortBy] = React.useState("sortTitle");
  const [sortReverse, setSortReverse] = React.useState(false);
  const [searchField, setSearchField] = React.useState("");
  const [sortedFilms, setSortedFilms] = React.useState(null);

  React.useEffect(() => {
    setSortedFilms(
      (() => {
        const sort = context.filmsSorted;
        switch (sortBy) {
          case "sortTitle":
            return sortReverse ? sort.titleDesc : sort.titleAsc;
          case "year":
            return sortReverse ? sort.yearDesc : sort.yearAsc;
          case "director":
            return sortReverse ? sort.directorDesc : sort.directorAsc;
          case "franchise":
            return sortReverse ? sort.franchiseDesc : sort.franchiseAsc;
          default:
            return context.films;
        }
      })()
    );
  }, [sortBy, sortReverse, context.films, context.filmsSorted]);

  const handleSort = (field) => {
    if (field === sortBy) setSortReverse(!sortReverse);
    else {
      setSortReverse(false);
      setSortBy(field);
    }
  };

  const handleSearch = (value) => {
    setSearchField(value);
  };

  if (!sortedFilms) return null;

  let films = (() => {
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
  })();

  if (!films) return null;

  return (
    <>
      <SearchForm onChange={handleSearch} />
      <div className="fieldHeaders">
        <span className="filmTitle" onClick={() => handleSort("sortTitle")}>
          Title
        </span>
        <span className="filmYear" onClick={() => handleSort("year")}>
          Year
        </span>
        <span className="filmDirector" onClick={() => handleSort("director")}>
          Director
        </span>
        <span className="filmGenre">Genre</span>
        <span className="filmYear" onClick={() => handleSort("franchise")}>
          Franchise
        </span>
      </div>
      {films
        .filter((e) => e.id > 0 && e.id < 100)
        .map((film) => (
          <FilmListItem key={film.id} film={film} />
        ))}
    </>
  );
}
