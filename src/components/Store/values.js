import { Film } from "../../classes/Film";
import filmsJson from "../../data/films.json";

const films = Film.generateFilmsArray(filmsJson).filter(
  (x, i, a) =>
    a.findIndex((e) => e.title === x.title && e.year === x.year) === i
);

const filmsSorted = Film.generateSortedFilmsObj(films);
console.info(
  `films.length: ${films.length} filmsSorted: ${Object.keys(filmsSorted)}`
);

const directorsMatrix = films.map((e) => e.director);
const directors = [...new Set([].concat.apply([], directorsMatrix))].sort(
  (a, b) => {
    a = a.split(/\s+/).pop();
    b = b.split(/\s+/).pop();
    return a.localeCompare(b);
  }
);
console.info(`directors.length: ${directors.length}`);

export { films, filmsSorted, directors };
