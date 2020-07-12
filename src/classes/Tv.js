// @ts-check

export class Tv {
  static _count = 0;
  static _sorts = ["title", "yearStart", "yearEnd", "creator"];

  constructor(tvSeries) {
    this.id = Tv._count += 1;
    this.title = tvSeries.title;
    this.sortTitle = tvSeries.sortTitle;
    this.creator = tvSeries.creator;
    this.genre = tvSeries.genre;
    this.seasons = tvSeries.seasons;
    this.minutesTotal = Number(
      this.seasons.reduce((sum, season) => sum + season.seasonMinutes, 0)
    );
  }

  static generateFinalArray(tvNames, tvSeasons) {
    const arr = [];

    for (let name of tvNames) {
      let filteredSeasons = tvSeasons.filter((e) => e.title === name);

      let tvSeries = {
        title: name,
        sortTitle: filteredSeasons[0].sortTitle,
        creator: filteredSeasons[0].creator,
        genre: filteredSeasons[0].genre,
        seasons: [],
      };

      for (let s of filteredSeasons) {
        tvSeries.seasons.push(this.parseSeason(s));
      }

      arr.push(new this(tvSeries));
    }
    return arr;
  }

  static parseSeason(s) {
    return {
      season: s.season,
      yearStart: s.yearStart,
      yearEnd: s.yearEnd,
      episodes: s.episodes,
      episodeMinutes: s.episodeMinutes,
      seasonMinutes: s.episodes * s.episodeMinutes,
    };
  }

  static generateSortedTvObj(tv) {
    console.time("genTvSortedObj");
    const obj = {};

    for (let sort of this._sorts) {
      for (let bool of [true, false]) {
        obj[`${sort}${bool ? "Desc" : "Asc"}`] = this.sortTv(
          [...tv],
          sort,
          bool
        );
      }
    }
    console.timeEnd("genTvSortedObj");
    return obj;
  }

  static sortTv(tv, sortBy, isDescending) {
    let algorithm = null;

    // title A-Z
    if (sortBy === "title") {
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

    // sort ascending (and descending if franchise)
    let array = [...tv].sort(algorithm);

    // for all except franchise we can just reverse to get descending
    if (isDescending && this._sorts.includes(sortBy)) {
      array = array.reverse();
    }

    return array;
  }
}
