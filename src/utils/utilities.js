export const normalize = (str) => {
  return str
    .normalize("NFD")
    .replace(/[^\w\s.-_/]/g, "")
    .toLowerCase();
};

export const sortLastName = (a, b) => {
  a = a.split(/\s+/).pop();
  b = b.split(/\s+/).pop();
  return a.localeCompare(b);
};

export const formatYear = (media) => {
  if (media.type === "creator") return null;

  return media.type === "tv"
    ? `(${media.seasons[0].yearStart}-${
        media.seasons[media.seasons.length - 1].yearEnd
      })`
    : `(${media.year})`;
};

export const isMedia = (mediaType) => mediaType.type !== "creator";

export const getCreations = (name, context) => {
  let cFilms = context.films.filter((e) => e.director.includes(name));
  let cTv = context.tv.filter((e) => e.creator.includes(name));
  let cGames = context.games.filter((e) => e.developer.includes(name));
  return [...cFilms, ...cTv, ...cGames];
};
