import { Film } from "../classes/Film";
import { Game } from "../classes/Game";
import { Television } from "../classes/Television";
import { normalize } from "./utilities";

export const filterFilms = (films: Film[], filterRaw: string): Film[] => {
  const filter = normalize(filterRaw);

  if (filter.startsWith("g:")) {
    return films.filter(
      (film) =>
        film.genre.findIndex((genre) =>
          normalize(genre).includes(filter.replace("g:", ""))
        ) !== -1
    );
  } else if (filter.startsWith("y:")) {
    return films.filter(
      (film) => film.year.toString() === filter.replace("y:", "")
    );
  } else {
    return films.filter(
      (film) =>
        normalize(film.name).includes(filter) ||
        film.creator.findIndex((director) =>
          normalize(director).includes(filter)
        ) !== -1 ||
        normalize(film.franchise).includes(filter) ||
        normalize(film.translatedTitle).includes(filter)
    );
  }
};

export const filterTv = (
  tvs: Television[],
  filterRaw: string
): Television[] => {
  const filter = normalize(filterRaw);

  if (filter.startsWith("g:")) {
    return tvs.filter(
      (tv) =>
        tv.genre.findIndex((genre) =>
          normalize(genre).includes(filter.replace("g:", ""))
        ) !== -1
    );
  } else if (filter.startsWith("y:")) {
    return tvs.filter((tv) => {
      const search = Number(filter.replace("y:", ""));
      return (
        tv.seasons[0].yearStart <= search &&
        tv.seasons[tv.seasons.length - 1].yearEnd >= search
      );
    });
  } else if (filter.startsWith("ys:")) {
    return tvs.filter(
      (tv) => tv.seasons[0].yearStart.toString() === filter.replace("ys:", "")
    );
  } else if (filter.startsWith("ye:")) {
    return tvs.filter(
      (tv) =>
        tv.seasons[tv.seasons.length - 1].yearEnd.toString() ===
        filter.replace("ye:", "")
    );
  } else {
    return tvs.filter(
      (tv) =>
        normalize(tv.name).includes(filter) ||
        tv.creator.findIndex((creator) =>
          normalize(creator).includes(filter)
        ) !== -1
    );
  }
};

export const filterGames = (sortedGames: Game[], filterRaw: string): Game[] => {
  const filter = normalize(filterRaw);

  if (filter.startsWith("g:")) {
    return sortedGames.filter(
      (game) =>
        game.genre.findIndex((genre) =>
          normalize(genre).includes(filter.replace("g:", ""))
        ) !== -1
    );
  } else if (filter.startsWith("y:")) {
    return sortedGames.filter(
      (game) => game.year.toString() === filter.replace("y:", "")
    );
  } else if (filter.startsWith("c:")) {
    return sortedGames.filter((game) =>
      normalize(game.completed).includes(filter.replace("c:", ""))
    );
  } else {
    return sortedGames.filter(
      (game) =>
        normalize(game.name).includes(filter) ||
        game.creator.findIndex((developer) =>
          normalize(developer).includes(filter)
        ) !== -1 ||
        normalize(game.completed).includes(filter) ||
        normalize(game.system).includes(filter)
    );
  }
};
