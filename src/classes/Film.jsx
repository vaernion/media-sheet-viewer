import filmsRaw from "../data/films.json";

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
}

export const films = [];
for (let i = 0; i < filmsRaw.length; i++) {
  films.push(new Film(filmsRaw[i]));
}

const filmsSortedTitleAsc = [...films].sort((a, b) => {
  return a.sortTitle.localeCompare(b.sortTitle);
});
const filmsSortedTitleDesc = [...filmsSortedTitleAsc].reverse();
const filmsSortedYearAsc = [...films].sort((a, b) => a.year - b.year);
const filmsSortedYearDesc = [...filmsSortedYearAsc].reverse();
const filmsSortedDirectorAsc = [...films].sort((a, b) => {
  a = a.director[0].split(" ").pop();
  b = b.director[0].split(" ").pop();
  return a.localeCompare(b);
});
const filmsSortedDirectorDesc = [...filmsSortedDirectorAsc].reverse();
const filmsSortedFranchiseAsc = [...films].sort((a, b) => {
  if (a.franchise === "") return 1;
  if (b.franchise === "") return -1;
  return a.franchise.localeCompare(b.franchise);
});
const filmsSortedFranchiseDesc = [...films].sort((a, b) => {
  if (a.franchise === "") return 1;
  if (b.franchise === "") return -1;
  return b.franchise.localeCompare(a.franchise);
});

export const filmsSorted = {
  titleAsc: filmsSortedTitleAsc,
  titleDesc: filmsSortedTitleDesc,
  yearAsc: filmsSortedYearAsc,
  yearDesc: filmsSortedYearDesc,
  directorAsc: filmsSortedDirectorAsc,
  directorDesc: filmsSortedDirectorDesc,
  franchiseAsc: filmsSortedFranchiseAsc,
  franchiseDesc: filmsSortedFranchiseDesc,
};
