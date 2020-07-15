// @ts-check

import { splitRegex } from "../utils/regex";

export class Film {
  static _count = 0;
  static _sorts = ["sortTitle", "year", "director", "franchise"];

  constructor(film) {
    this.id = Film._count += 1;
    this.type = "film";
    this.title = film["Original title (romanized)"];
    this.translatedTitle = film["This release's translation/title"];
    this.sortTitle = film["Sort"];
    this.director = [];
    for (let director of film["Director(s)"].split(splitRegex)) {
      this.director.push(director.trim());
    }
    this.genre = [];
    for (let genre of film["Genres"].split(splitRegex)) {
      this.genre.push(genre.trim());
    }
    this.year = film["Year"];
    this.franchise = film["Series/Universe"];
  }

  static generateFilmsFromJson(filmsJson) {
    return filmsJson.map((film) => new this(film));
  }

  static generateSortedFilms(films) {
    const sortedFilms = {};

    for (let sort of this._sorts) {
      for (let bool of [true, false]) {
        sortedFilms[`${sort}${bool ? "Desc" : "Asc"}`] = this.sortFilms(
          [...films],
          sort,
          bool
        );
      }
    }

    return sortedFilms;
  }

  static sortFilms(films, sortBy, isDescending) {
    let algorithm = null;

    // title A-Z
    if (sortBy === "sortTitle") {
      algorithm = (a, b) => a.sortTitle.localeCompare(b.sortTitle);
      // year 1900-2000
    } else if (sortBy === "year") {
      algorithm = (a, b) => a.year - b.year;
      // director A-Z by last name of first director
    } else if (sortBy === "director") {
      algorithm = (a, b) => {
        a = a.director[0].split(/\s+/).pop();
        b = b.director[0].split(/\s+/).pop();
        return a.localeCompare(b);
      };
      // franchise, entries without franchise always last
    } else if (sortBy === "franchise") {
      // franchise A-Z
      if (!isDescending) {
        algorithm = (a, b) => {
          if (a.franchise === "") return 1;
          if (b.franchise === "") return -1;
          return a.franchise.localeCompare(b.franchise);
        };
        // franchise Z-A
      } else {
        algorithm = (a, b) => {
          if (a.franchise === "") return 1;
          if (b.franchise === "") return -1;
          return b.franchise.localeCompare(a.franchise);
        };
      }
    }

    if (!algorithm) return films;

    // sort ascending (and descending if franchise)
    let array = [...films].sort(algorithm);

    // for all except franchise we can just reverse to get descending
    if (isDescending && ["sortTitle", "year", "director"].includes(sortBy)) {
      array = array.reverse();
    }

    return array;
  }
}
