import { Creator } from "../../classes/Creator";
import { Film } from "../../classes/Film";
import { Game } from "../../classes/Game";
import { Television } from "../../classes/Television";
import filmsJson from "../../data/films.json";
import gamesJson from "../../data/games.json";
import tvJson from "../../data/tv.json";
import { compareLastName } from "../../utils/utilities";

// films
const films = Film.generateFilmsFromJson(filmsJson).filter(
  (x, i, a) => a.findIndex((e) => e.name === x.name && e.year === x.year) === i
);
const filmsSorted = Film.generateSortedFilms(films);
// console.info(
//   `films.length: ${films.length} filmsSorted: ${Object.keys(filmsSorted)}`
// );

// film directors
const directorsMatrix = films.map((e) => e.creator);
const directors = Array.from(new Set(directorsMatrix.flat())).sort(
  compareLastName
);
// console.info(`directors.length: ${directors.length}`);

// tv
const tv = Television.generateTvFromJson(tvJson);
const tvSorted = Television.generateSortedTv(tv);
// console.info(`tv.length: ${tv.length} tvSorted: ${Object.keys(tvSorted)}`);

// games
const games = Game.generateGamesFromJson(gamesJson).filter(
  (x, i, a) => a.findIndex((e) => e.name === x.name && e.year === x.year) === i
);
const gamesSorted = Game.generateSortedGames(games);
// console.info(
//   `games.length: ${games.length} gamesSorted: ${Object.keys(gamesSorted)}`
// );

// console.time("matrix fiesta");
const tvCreatorsMatrix = tv.map((e) => e.creator);
const tvCreators = Array.from(new Set(tvCreatorsMatrix.flat()));
const filmAndTvCreators = Array.from(
  new Set([...directors, ...tvCreators])
).sort(compareLastName);

const gameDevelopersMatrix = games.map((e) => e.creator);
const gameDevelopers = Array.from(new Set(gameDevelopersMatrix.flat())).sort();

const creators = Array.from(
  new Set([...filmAndTvCreators, ...gameDevelopers])
).map((name) => new Creator(name));
// console.timeEnd("matrix fiesta");

// console.info(
//   "directors",
//   directors.length,
//   "tvCreators",
//   tvCreators.length,
//   "filmAndTv",
//   filmAndTvCreators.length,
//   "gameDevs",
//   gameDevelopers.length,
//   "all",
//   creators.length
// );

export const mediaSheet = {
  films,
  filmsSorted,
  directors,
  tv,
  tvSorted,
  games,
  gamesSorted,
  creators,
};

export type MediaSheet = typeof mediaSheet;

// console.info(`mediaSheet: ${Object.keys(mediaSheet)}`);
