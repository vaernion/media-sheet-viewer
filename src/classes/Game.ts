import { splitRegex } from "../utils/regex";

type GameJson = {
  [key: string]: string;
};
type SortedGames = {
  [key: string]: Game[];
};

export class Game {
  static count: number = 0;
  static sorts: string[] = [
    "sortTitle",
    "year",
    "developer",
    "completed",
    "system",
  ];

  id: number;
  type: string;
  name: string;
  sortTitle: string;
  creator: string[];
  genre: string[];
  year: number;
  completed: string;
  system: string;

  constructor(game: GameJson) {
    this.id = Game.count += 1;
    this.type = "game";
    this.name = game["Title"];
    this.sortTitle = game["Sort"];
    this.creator = [];
    for (let developer of game["Developer(s)"].split(splitRegex)) {
      this.creator.push(developer.trim());
    }
    this.genre = [];
    for (let genre of game["Genres"].split(splitRegex)) {
      this.genre.push(genre.trim());
    }
    this.year = Number(game["Year"]);
    this.completed = game["completed?"] || "no";
    this.system = game["System"];
  }

  static generateGamesFromJson(gamesJson: GameJson[]): Game[] {
    return gamesJson.map((game) => new this(game));
  }

  static generateSortedGames(games: Game[]): SortedGames {
    const sortedGames: SortedGames = {};

    for (let sort of this.sorts) {
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

  static sortGames(
    games: Game[],
    sortBy: string,
    isDescending: boolean
  ): Game[] {
    let algorithm: ((a: any, b: any) => number) | null = null;

    // title/completed/system A-Z
    if (
      sortBy === "sortTitle" ||
      sortBy === "completed" ||
      sortBy === "system"
    ) {
      algorithm = (a, b) => a[sortBy].localeCompare(b[sortBy]);
      // year 1900-2000
    } else if (sortBy === "year") {
      algorithm = (a, b) => a.year - b.year;
      // developers A-Z by first dev
    } else if (sortBy === "developer") {
      algorithm = (a, b) => {
        a = a.creator[0];
        b = b.creator[0];
        return a.localeCompare(b);
      };
    }

    if (!algorithm) return games;

    // sort ascending
    let array = [...games].sort(algorithm);

    // reverse to get descending
    if (isDescending && this.sorts.includes(sortBy)) {
      array = array.reverse();
    }

    return array;
  }
}
