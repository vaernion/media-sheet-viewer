import * as React from "react";
import { Film } from "../../classes/Film";
import filmsJson from "../../data/films.json";

const films = Film.generateFilmsArray(filmsJson);
const filmsSorted = Film.generateSortedFilmsObj(films);
console.info(
  `films.length: ${films.length} filmsSorted: ${Object.keys(filmsSorted)}`
);

export const MediaContext = React.createContext();

const initialState = { count: 0 };

const storeReducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return initialState;
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default function Store(props) {
  //   const mediaContext = { films, filmsSorted };
  const [store, dispatch] = React.useReducer(storeReducer, initialState);

  return (
    <>
      <MediaContext.Provider value={{ store, dispatch, films, filmsSorted }}>
        {props.children}
      </MediaContext.Provider>
    </>
  );
}
