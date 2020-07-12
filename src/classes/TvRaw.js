// @ts-check

export class TvRaw {
  static _count = 0;

  constructor(tv) {
    this.id = TvRaw._count += 1;
    this.title = tv["Original title"];
    this.sortTitle = tv["Sort"];
    this.creator = [];
    for (let creator of tv["Creator(s)"].split(/[&,/]+|\band\b/)) {
      this.creator.push(creator.trim());
    }
    this.genre = [];
    for (let genre of tv["Genres"].split(/[,/|]+/)) {
      this.genre.push(genre.trim());
    }
    this.season = Number(tv["S"]);
    this.yearStart = Number(tv["Start"]);
    this.yearEnd = Number(tv["End"]);
    this.episodes = Number(tv["E"]);
    this.episodeMinutes = parseInt(tv["Mins"]);
  }

  static generateInitialArray(tvJson) {
    return tvJson.map((tv) => new this(tv));
  }
}
