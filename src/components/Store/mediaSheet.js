import { Creator } from "../../classes/Creator";
import { Film } from "../../classes/Film";
import { Game } from "../../classes/Game";
import { Television } from "../../classes/Television";
import filmsJson from "../../data/films.json";
import gamesJson from "../../data/games.json";
import tvJson from "../../data/tv.json";
import { sortLastName } from "../../utils/utilities";

// films
const films = Film.generateFilmsFromJson(filmsJson).filter(
  (x, i, a) =>
    a.findIndex((e) => e.title === x.title && e.year === x.year) === i
);
const filmsSorted = Film.generateSortedFilms(films);
// console.info(
//   `films.length: ${films.length} filmsSorted: ${Object.keys(filmsSorted)}`
// );

// film directors
const directorsMatrix = films.map((e) => e.director);
const directors = [...new Set([].concat.apply([], directorsMatrix))].sort(
  sortLastName
);
// console.info(`directors.length: ${directors.length}`);

// tv
const tv = Television.generateTvFromJson(tvJson);
const tvSorted = Television.generateSortedTv(tv);
// console.info(`tv.length: ${tv.length} tvSorted: ${Object.keys(tvSorted)}`);

// games
const games = Game.generateGamesFromJson(gamesJson).filter(
  (x, i, a) =>
    a.findIndex((e) => e.title === x.title && e.year === x.year) === i
);
const gamesSorted = Game.generateSortedGames(games);
// console.info(
//   `games.length: ${games.length} gamesSorted: ${Object.keys(gamesSorted)}`
// );

// console.time("matrix fiesta");
const tvCreatorsMatrix = tv.map((e) => e.creator);
const tvCreators = [...new Set([].concat.apply([], tvCreatorsMatrix))];
const filmAndTvCreators = [...new Set([...directors, ...tvCreators])].sort(
  sortLastName
);

const gameDevelopersMatrix = games.map((e) => e.developer);
const gameDevelopers = [
  ...new Set([].concat.apply([], gameDevelopersMatrix)),
].sort();
// .map((e) => {
//   return { name: e, type: "Studio" };
// });
// console.log(gameDevelopers[1]);

const creators = [...new Set([...filmAndTvCreators, ...gameDevelopers])].map(
  (name) => new Creator(name)
);
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

// console.info(`mediaSheet: ${Object.keys(mediaSheet)}`);
