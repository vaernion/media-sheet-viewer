import * as React from "react";

let initialCount = 0;
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

type Count = typeof initialCount;
type State = typeof initialState;
type Action =
  | {
      type:
        | "reset"
        | "resetCount"
        | "increment"
        | "decrement"
        | "SORT_REVERSE_FILMS"
        | "SORT_REVERSE_TV"
        | "SORT_REVERSE_GAMES";
    }
  | {
      type:
        | "FILTER_FILMS"
        | "FILTER_TV"
        | "FILTER_GAMES"
        | "SORT_FILMS"
        | "SORT_TV"
        | "SORT_GAMES";

      payload: string;
    };

const countReducer = (state: Count, action: Action): Count => {
  switch (action.type) {
    case "resetCount":
      return initialCount;
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

const storeReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "reset":
      return initialState;
    case "resetCount":
    case "increment":
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
  }
};

// separate contexts so components that
// only use dispatch won't re-render
type DispatchType = React.Dispatch<Action> | ((arg: any) => void);
export const DispatchContext = React.createContext<DispatchType>(() => {});
export const StateContext = React.createContext(initialState);

type Props = { children: React.ReactNode };

export default function Store(props: Props) {
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
