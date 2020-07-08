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
    let array = [];

    for (let i = 0; i < filmsJson.length; i++) {
      array.push(new this(filmsJson[i]));
    }

    return array;
  }

  static generateSortedFilmsObj(films) {
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

    return obj;
  }

  static sortFilms(films, sortBy, isDescending) {
    let algorithm = null;

    if (sortBy === "title") {
      algorithm = (a, b) => a.sortTitle.localeCompare(b.sortTitle);
    } else if (sortBy === "year") {
      algorithm = (a, b) => a.year - b.year;
    } else if (sortBy === "director") {
      algorithm = (a, b) => {
        a = a.director[0].split(" ").pop();
        b = b.director[0].split(" ").pop();
        return a.localeCompare(b);
      };
    } else if (sortBy === "franchise") {
      if (!isDescending) {
        algorithm = (a, b) => {
          if (a.franchise === "") return 1;
          if (b.franchise === "") return -1;
          return a.franchise.localeCompare(b.franchise);
        };
      } else {
        algorithm = (a, b) => {
          if (a.franchise === "") return 1;
          if (b.franchise === "") return -1;
          return b.franchise.localeCompare(a.franchise);
        };
      }
    }

    let array = [...films].sort(algorithm);

    if (isDescending && ["title", "year", "director"].includes(sortBy)) {
      array = array.reverse();
    }

    return array;
  }
}
