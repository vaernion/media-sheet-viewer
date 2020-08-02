import { Creator } from "../classes/Creator";
import { Film } from "../classes/Film";
import { Game } from "../classes/Game";
import { Television } from "../classes/Television";
import { MediaSheet } from "../components/Store/mediaSheet";

export const normalize = (str: string) => {
  return str
    .normalize("NFD")
    .replace(/[^\w\s.-_/]/g, "")
    .toLowerCase();
};

export const compareLastName = (a: string, b: string) => {
  const arrA = a.split(/\s+/);
  const arrB = b.split(/\s+/);
  a = arrA[arrA.length - 1];
  b = arrB[arrB.length - 1];
  return a.localeCompare(b);
};

export const formatYear = (media: Film | Television | Game | Creator) => {
  if (media.type === "tv" && "seasons" in media) {
    return `(${media.seasons[0].yearStart}-${
      media.seasons[media.seasons.length - 1].yearEnd
    })`;
  } else if ("year" in media) {
    return `(${media.year})`;
  } else {
    return null;
  }
};

export const isMedia = (mediaType: string) => {
  return mediaType !== "creator";
};

export const getCreations = (name: string, mediaSheet: MediaSheet) => {
  let cFilms = mediaSheet.filmsSorted.yearDesc.filter((e) =>
    e.creator.includes(name)
  );
  let cTv = mediaSheet.tvSorted.yearStartDesc.filter((e) =>
    e.creator.includes(name)
  );
  let cGames = mediaSheet.gamesSorted.yearDesc.filter((e) =>
    e.creator.includes(name)
  );
  return [...cFilms, ...cTv, ...cGames];
};

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
