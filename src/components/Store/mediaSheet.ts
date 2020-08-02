import { Creator } from "../../classes/Creator";
import { Film } from "../../classes/Film";
import { Game } from "../../classes/Game";
import { Television } from "../../classes/Television";
import filmsJson from "../../data/films.json";
import gamesJson from "../../data/games.json";
import tvJson from "../../data/tv.json";
import { compareLastName } from "../../utils/utilities";

/* *************
mediaSheet
************* */

// films - filtered for uniques
const films = Film.generateFilmsFromJson(filmsJson).filter(
  (x, i, a) => a.findIndex((e) => e.name === x.name && e.year === x.year) === i
);
const filmsSorted = Film.generateSortedFilms(films);

// film directors
const directorsMatrix = films.map((e) => e.creator);
const directors = Array.from(new Set(directorsMatrix.flat())).sort(
  compareLastName
);

// tv
const tv = Television.generateTvFromJson(tvJson);
const tvSorted = Television.generateSortedTv(tv);

// games - filtered for uniques
const games = Game.generateGamesFromJson(gamesJson).filter(
  (x, i, a) => a.findIndex((e) => e.name === x.name && e.year === x.year) === i
);
const gamesSorted = Game.generateSortedGames(games);

// creators - messy way to collect all unique names (film and tv share many)
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

/* *************
stats
************* */

// films
const filmGenreList = Array.from(
  new Set(films.map((film) => film.genre).flat())
).sort();
const filmGenres = filmGenreList.map((genre) => ({
  name: genre,
  sum: films.filter((film) => film.genre.includes(genre)).length,
}));

const filmYearList = Array.from(
  new Set(films.map((film) => film.year).flat())
).sort();
const filmYears = filmYearList.map((year) => {
  const genres = filmGenreList.map((genre) => ({
    name: genre,
    sum: films.filter(
      (film) => film.year === year && film.genre.includes(genre)
    ).length,
  }));
  return {
    year,
    sum: films.filter((film) => film.year === year).length,
    genres,
  };
});

// tv
const tvGenreList = Array.from(new Set(tv.map((t) => t.genre).flat())).sort();
const tvGenres = tvGenreList.map((genre) => ({
  name: genre,
  sum: tv.filter((t) => t.genre.includes(genre)).length,
}));

const tvYearList = Array.from(
  new Set([
    ...tv
      .map((t) => t.seasons)
      .flat()
      .map((s) => s.yearStart),
    ...tv
      .map((t) => t.seasons)
      .flat()
      .map((s) => s.yearEnd),
  ])
).sort();
const tvYears = tvYearList.map((year) => {
  const genres = tvGenreList.map((genre) => ({
    name: genre,
    sum: tv.filter(
      (t) =>
        t.seasons[0].yearStart <= year &&
        t.seasons[t.seasons.length - 1].yearEnd >= year &&
        t.genre.includes(genre)
    ).length,
  }));
  return {
    year,
    sum: tv.filter(
      (t) =>
        t.seasons[0].yearStart <= year &&
        t.seasons[t.seasons.length - 1].yearEnd >= year
    ).length,
    genres,
  };
});

// games
const gameGenreList = Array.from(
  new Set(games.map((game) => game.genre).flat())
).sort();
const gameGenres = gameGenreList.map((genre) => ({
  name: genre,
  sum: games.filter((game) => game.genre.includes(genre)).length,
}));

const gameYearList = Array.from(
  new Set(games.map((game) => game.year).flat())
).sort();
const gameYears = gameYearList.map((year) => {
  const genres = gameGenreList.map((genre) => ({
    name: genre,
    sum: games.filter(
      (game) => game.year === year && game.genre.includes(genre)
    ).length,
  }));
  return {
    year,
    sum: games.filter((game) => game.year === year).length,
    genres,
  };
});

/* *************
export
************* */

export const stats = {
  filmGenres,
  filmYears,
  tvGenres,
  tvYears,
  gameGenres,
  gameYears,
};

export const mediaSheet = {
  films,
  filmsSorted,
  directors,
  tv,
  tvSorted,
  games,
  gamesSorted,
  creators,
  filmGenres: filmGenreList,
};

export type MediaSheet = typeof mediaSheet;
