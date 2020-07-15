import { Film } from "../../classes/Film";
import { Game } from "../../classes/Game";
import { Television } from "../../classes/Television";
import filmsJson from "../../data/films.json";
import gamesJson from "../../data/games.json";
import tvJson from "../../data/tv.json";

// films
console.time("generate film");
const films = Film.generateFilmsFromJson(filmsJson).filter(
  (x, i, a) =>
    a.findIndex((e) => e.title === x.title && e.year === x.year) === i
);
const filmsSorted = Film.generateSortedFilms(films);
console.timeEnd("generate film");
console.info(
  `films.length: ${films.length} filmsSorted: ${Object.keys(filmsSorted)}`
);

// film directors
console.time("generate directors");
const directorsMatrix = films.map((e) => e.director);
const directors = [...new Set([].concat.apply([], directorsMatrix))].sort(
  (a, b) => {
    a = a.split(/\s+/).pop();
    b = b.split(/\s+/).pop();
    return a.localeCompare(b);
  }
);
console.timeEnd("generate directors");
console.info(`directors.length: ${directors.length}`);

// tv
console.time("generate tv");
const tv = Television.generateTvFromJson(tvJson);
const tvSorted = Television.generateSortedTv(tv);
console.timeEnd("generate tv");
console.info(`tv.length: ${tv.length} tvSorted: ${Object.keys(tvSorted)}`);

// games
console.time("generate games");
const games = Game.generateGamesFromJson(gamesJson).filter(
  (x, i, a) =>
    a.findIndex((e) => e.title === x.title && e.year === x.year) === i
);
const gamesSorted = Game.generateSortedGames(games);
console.timeEnd("generate games");
console.info(
  `games.length: ${games.length} gamesSorted: ${Object.keys(gamesSorted)}`
);

export const values = {
  films,
  filmsSorted,
  directors,
  tv,
  tvSorted,
  games,
  gamesSorted,
};
