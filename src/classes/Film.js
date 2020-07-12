// @ts-check

export class Film {
  static _count = 0;

  constructor(film) {
    this.id = Film._count += 1;
    this.title = film["Original title (romanized)"];
    this.translatedTitle = film["This release's translation/title"];
    this.sortTitle = film["Sort"];
    this.director = [];
    for (let director of film["Director(s)"].split(/[,/]+/)) {
      this.director.push(director.trim());
    }
    this.genre = [];
    for (let genre of film["Genres"].split(/[,/|]+/)) {
      this.genre.push(genre.trim());
    }
    this.year = film["Year"];
    this.franchise = film["Series/Universe"];
  }

  static generateFilmsArray(filmsJson) {
    return filmsJson.map((film) => new this(film));
  }

  static generateSortedFilmsObj(films) {
    console.time("genFilmsObj");
    const obj = {};
    const sorts = ["title", "year", "director", "franchise"];

    for (let sort of sorts) {
      for (let bool of [true, false]) {
        obj[`${sort}${bool ? "Desc" : "Asc"}`] = this.sortFilms(
          [...films],
          sort,
          bool
        );
      }
    }
    console.timeEnd("genFilmsObj");
    return obj;
  }

  static sortFilms(films, sortBy, isDescending) {
    console.time(`${sortBy}${isDescending}`);
    let algorithm = null;

    // title A-Z
    if (sortBy === "title") {
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
    if (isDescending && ["title", "year", "director"].includes(sortBy)) {
      array = array.reverse();
    }

    console.timeEnd(`${sortBy}${isDescending}`);
    return array;
  }
}
