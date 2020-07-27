import { splitRegex } from "../utils/regex";

type TvJson = {
  [key: string]: string;
};
type RawSeason = {
  title: string;
  sortTitle: string;
  creator: string[];
  genre: string[];
  season: number;
  yearStart: number;
  yearEnd: number;
  episodes: number;
  episodeMinutes: number;
};
type TvSeason = {
  season: number;
  yearStart: number;
  yearEnd: number;
  episodes: number;
  episodeMinutes: number;
  seasonMinutes: number;
};
type TvSeries = {
  title: string;
  sortTitle: string;
  creator: string[];
  genre: string[];
  seasons: TvSeason[];
};
type SortedTv = {
  [key: string]: Television[];
};

export class Television {
  static count: number = 0;
  static sorts: string[] = ["sortTitle", "yearStart", "yearEnd", "creator"];

  id: number;
  type: string;
  name: string;
  sortTitle: string;
  creator: string[];
  genre: string[];
  seasons: TvSeason[];
  minutesTotal: number;

  constructor(tvSeries: TvSeries) {
    this.id = Television.count += 1;
    this.type = "tv";
    this.name = tvSeries.title;
    this.sortTitle = tvSeries.sortTitle;
    this.creator = tvSeries.creator;
    this.genre = tvSeries.genre;
    this.seasons = tvSeries.seasons;
    this.minutesTotal = Number(
      this.seasons.reduce((sum, season) => sum + season.seasonMinutes, 0)
    );
  }

  static generateTvFromJson(tvJson: TvJson[]): Television[] {
    // every season from json
    const tvSeasons = tvJson.map(this.parseTvEntry);
    // unique names of series
    const tvNames = Array.from(
      new Set(tvSeasons.map((tvSeason) => tvSeason.title))
    );

    return tvNames.map((name) => {
      // seasons of named series
      let filteredSeasons = tvSeasons.filter(
        (tvSeason) => tvSeason.title === name
      );

      // used as class constructor argument
      let tvSeries: TvSeries = {
        title: name,
        sortTitle: filteredSeasons[0].sortTitle,
        creator: filteredSeasons[0].creator,
        genre: filteredSeasons[0].genre,
        seasons: filteredSeasons.map((rawSeason) => ({
          season: rawSeason.season,
          yearStart: rawSeason.yearStart,
          yearEnd: rawSeason.yearEnd,
          episodes: rawSeason.episodes,
          episodeMinutes: rawSeason.episodeMinutes,
          seasonMinutes: rawSeason.episodes * rawSeason.episodeMinutes,
        })),
      };

      return new this(tvSeries);
    });
  }

  static parseTvEntry(tv: TvJson): RawSeason {
    return {
      title: tv["Original title"],
      sortTitle: tv["Sort"],
      creator: tv["Creator(s)"].split(splitRegex).map((name) => name.trim()),
      genre: tv["Genres"].split(splitRegex).map((name) => name.trim()),
      season: Number(tv["S"]),
      yearStart: Number(tv["Start"]),
      yearEnd: Number(tv["End"]),
      episodes: Number(tv["E"]),
      episodeMinutes: parseInt(tv["Mins"]),
    };
  }

  static generateSortedTv(tv: Television[]): SortedTv {
    const sortedTv: SortedTv = {};

    for (let sort of this.sorts) {
      for (let bool of [true, false]) {
        sortedTv[`${sort}${bool ? "Desc" : "Asc"}`] = this.sortTv(
          [...tv],
          sort,
          bool
        );
      }
    }

    return sortedTv;
  }

  static sortTv(
    tv: Television[],
    sortBy: string,
    isDescending: boolean
  ): Television[] {
    let algorithm: ((a: any, b: any) => number) | null = null;

    // title A-Z
    if (sortBy === "sortTitle") {
      algorithm = (a, b) => a.sortTitle.localeCompare(b.sortTitle);
      // year 1900-2000 start first season
    } else if (sortBy === "yearStart") {
      algorithm = (a, b) => a.seasons[0].yearStart - b.seasons[0].yearStart;
      // year 1900-2000 end last season
    } else if (sortBy === "yearEnd") {
      algorithm = (a, b) =>
        a.seasons[a.seasons.length - 1].yearEnd -
        b.seasons[b.seasons.length - 1].yearEnd;
      // creator A-Z by last name of first creator
    } else if (sortBy === "creator") {
      algorithm = (a, b) => {
        a = a.creator[0].split(/\s+/).pop();
        b = b.creator[0].split(/\s+/).pop();
        return a.localeCompare(b);
      };
    }

    if (!algorithm) return tv;

    // sort ascending
    let array = [...tv].sort(algorithm);

    // reverse to get descending
    if (isDescending && this.sorts.includes(sortBy)) {
      array = array.reverse();
    }

    return array;
  }
}
