import { Film } from "../../classes/Film";
import { Tv } from "../../classes/Tv";
import { TvRaw } from "../../classes/TvRaw";
import filmsJson from "../../data/films.json";
import tvJson from "../../data/tv.json";

// films
const films = Film.generateFilmsArray(filmsJson).filter(
  (x, i, a) =>
    a.findIndex((e) => e.title === x.title && e.year === x.year) === i
);

const filmsSorted = Film.generateSortedFilmsObj(films);
console.info(
  `films.length: ${films.length} filmsSorted: ${Object.keys(filmsSorted)}`
);

// film directors
const directorsMatrix = films.map((e) => e.director);
const directors = [...new Set([].concat.apply([], directorsMatrix))].sort(
  (a, b) => {
    a = a.split(/\s+/).pop();
    b = b.split(/\s+/).pop();
    return a.localeCompare(b);
  }
);
console.info(`directors.length: ${directors.length}`);

// tv
console.time("genTvArr");
const tvSeasons = TvRaw.generateInitialArray(tvJson);
const tvNames = [...new Set(tvSeasons.map((e) => e.title))];
const tv = Tv.generateFinalArray(tvNames, tvSeasons);
console.timeEnd("genTvArr");
console.info(`tv.length: ${tv.length}`, tv[0]);

const tvSorted = Tv.generateSortedTvObj(tv);

export { films, filmsSorted, directors, tv, tvSorted };
