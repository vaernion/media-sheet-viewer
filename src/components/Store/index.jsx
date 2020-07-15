import * as React from "react";
import { values } from "./values";

console.info(`store.values: ${Object.keys(values)}`);

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
  const [store, dispatch] = React.useReducer(storeReducer, initialState);

  return (
    <>
      <MediaContext.Provider value={{ store, dispatch, ...values }}>
        {props.children}
      </MediaContext.Provider>
    </>
  );
}
