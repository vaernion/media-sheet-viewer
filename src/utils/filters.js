import { normalize } from "./utilities";

export const filterFilms = (sortedFilms, searchField) => {
  const searchStr = normalize(searchField);

  if (searchStr.startsWith("g:")) {
    return sortedFilms.filter(
      (film) =>
        film.genre.findIndex((genre) =>
          normalize(genre).includes(searchStr.replace("g:", ""))
        ) !== -1
    );
  } else if (searchStr.startsWith("y:")) {
    return sortedFilms.filter(
      (film) => film.year.toString() === searchStr.replace("y:", "")
    );
  } else {
    return sortedFilms.filter(
      (film) =>
        normalize(film.title).includes(searchStr) ||
        film.director.findIndex((director) =>
          normalize(director).includes(searchStr)
        ) !== -1 ||
        normalize(film.franchise).includes(searchStr)
    );
  }
};

export const filterTv = (sortedTv, searchField) => {
  const searchStr = normalize(searchField);

  if (searchStr.startsWith("g:")) {
    return sortedTv.filter(
      (tv) =>
        tv.genre.findIndex((genre) =>
          normalize(genre).includes(searchStr.replace("g:", ""))
        ) !== -1
    );
  } else if (searchStr.startsWith("y:")) {
    return sortedTv.filter((tv) => {
      const search = Number(searchStr.replace("y:", ""));

      return (
        tv.seasons[0].yearStart <= search &&
        tv.seasons[tv.seasons.length - 1].yearEnd >= search
      );
    });
  } else if (searchStr.startsWith("ys:")) {
    return sortedTv.filter(
      (tv) =>
        tv.seasons[0].yearStart.toString() === searchStr.replace("ys:", "")
    );
  } else if (searchStr.startsWith("ye:")) {
    return sortedTv.filter(
      (tv) =>
        tv.seasons[tv.seasons.length - 1].yearEnd.toString() ===
        searchStr.replace("ye:", "")
    );
  } else {
    return sortedTv.filter(
      (tv) =>
        normalize(tv.title).includes(searchStr) ||
        tv.creator.findIndex((creator) =>
          normalize(creator).includes(searchStr)
        ) !== -1
    );
  }
};

export const filterGames = (sortedGames, searchField) => {
  const searchStr = normalize(searchField);

  if (searchStr.startsWith("g:")) {
    return sortedGames.filter(
      (game) =>
        game.genre.findIndex((genre) =>
          normalize(genre).includes(searchStr.replace("g:", ""))
        ) !== -1
    );
  } else if (searchStr.startsWith("y:")) {
    return sortedGames.filter(
      (game) => game.year.toString() === searchStr.replace("y:", "")
    );
  } else if (searchStr.startsWith("c:")) {
    return sortedGames.filter((game) =>
      normalize(game.completed).includes(searchStr.replace("c:", ""))
    );
  } else {
    return sortedGames.filter(
      (game) =>
        normalize(game.title).includes(searchStr) ||
        game.developer.findIndex((developer) =>
          normalize(developer).includes(searchStr)
        ) !== -1 ||
        normalize(game.completed).includes(searchStr) ||
        normalize(game.system).includes(searchStr)
    );
  }
};
