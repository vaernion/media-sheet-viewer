import * as React from "react";

const initialCount = 0;
const initialState = {
  count: initialCount,
  filterFilms: "",
  filterTv: "",
  filterGames: "",
  sortFilms: "sortTitle",
  sortTv: "sortTitle",
  sortGames: "sortTitle",
  sortReverseFilms: false,
  sortReverseTv: false,
  sortReverseGames: false,
};

const countReducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return initialCount;
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return initialState;
    case "resetCount":
      return { ...state, count: countReducer(state.count, action) };
    case "increment":
      return { ...state, count: countReducer(state.count, action) };
    case "decrement":
      return { ...state, count: countReducer(state.count, action) };
    case "FILTER_FILMS":
      return { ...state, filterFilms: action.payload };
    case "FILTER_TV":
      return { ...state, filterTv: action.payload };
    case "FILTER_GAMES":
      return { ...state, filterGames: action.payload };
    case "SORT_FILMS":
      return { ...state, sortFilms: action.payload };
    case "SORT_TV":
      return { ...state, sortTv: action.payload };
    case "SORT_GAMES":
      return { ...state, sortGames: action.payload };
    case "SORT_REVERSE_FILMS":
      return { ...state, sortReverseFilms: !state.sortReverseFilms };
    case "SORT_REVERSE_TV":
      return { ...state, sortReverseTv: !state.sortReverseTv };
    case "SORT_REVERSE_GAMES":
      return { ...state, sortReverseGames: !state.sortReverseGames };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

// separate contexts so components that
// only use dispatch won't re-render
export const DispatchContext = React.createContext();
export const StateContext = React.createContext();

export default function Store(props) {
  const [state, dispatch] = React.useReducer(storeReducer, initialState);

  return (
    <>
      <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
          {props.children}
        </StateContext.Provider>
      </DispatchContext.Provider>
    </>
  );
}
