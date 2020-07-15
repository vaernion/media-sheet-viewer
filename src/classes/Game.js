// @ts-check

import { splitRegex } from "../utils/regex";

export class Game {
  static _count = 0;
  static _sorts = ["title", "year", "developer", "completed", "system"];

  constructor(game) {
    this.id = Game._count += 1;
    this.type = "game";
    this.title = game["Title"];
    this.sortTitle = game["Sort"];
    this.developer = [];
    for (let developer of game["Developer(s)"].split(splitRegex)) {
      this.developer.push(developer.trim());
    }
    this.genre = [];
    for (let genre of game["Genres"].split(splitRegex)) {
      this.genre.push(genre.trim());
    }
    this.year = game["Year"];
    this.completed = game["completed?"];
    this.system = game["System"];
  }

  static generateGamesFromJson(gamesJson) {
    return gamesJson.map((game) => new this(game));
  }

  static generateSortedGames(games) {
    const sortedGames = {};

    for (let sort of this._sorts) {
      for (let bool of [true, false]) {
        sortedGames[`${sort}${bool ? "Desc" : "Asc"}`] = this.sortGames(
          [...games],
          sort,
          bool
        );
      }
    }

    return sortedGames;
  }

  static sortGames(games, sortBy, isDescending) {
    let algorithm = null;

    // title/completed/system A-Z
    if (sortBy === "title" || sortBy === "completed" || sortBy === "system") {
      algorithm = (a, b) => a[sortBy].localeCompare(b[sortBy]);
      // year 1900-2000
    } else if (sortBy === "year") {
      algorithm = (a, b) => a.year - b.year;
      // developers A-Z by first dev
    } else if (sortBy === "developer") {
      algorithm = (a, b) => {
        a = a.developer[0];
        b = b.developer[0];
        return a.localeCompare(b);
      };
    }

    if (!algorithm) return games;

    // sort ascending
    let array = [...games].sort(algorithm);

    // reverse to get descending
    if (isDescending && this._sorts.includes(sortBy)) {
      array = array.reverse();
    }

    return array;
  }
}
