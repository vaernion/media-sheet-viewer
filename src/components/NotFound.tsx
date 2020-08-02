import * as React from "react";
import { useLocation } from "react-router-dom";
import { DispatchContext, StateContext } from "./Store";

export default function NotFound() {
  const state = React.useContext(StateContext);
  const dispatch = React.useContext(DispatchContext);

  const location = useLocation();
  document.title = `404 error: ${location.pathname} - MediaSheetViewer`;
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>404</h1>
        {location.pathname} not found
        <div style={{ marginTop: "5em", textAlign: "center" }}>
          count: {state.count}
          <br />
          <button onClick={() => dispatch({ type: "increment" })}>+</button>
          <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        </div>
      </div>
    </>
  );
}
