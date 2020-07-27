import * as React from "react";
import { DispatchContext, StateContext } from "../Store";

export default function Home() {
  const state = React.useContext(StateContext);
  const dispatch = React.useContext(DispatchContext);

  document.title = "MediaSheetViewer";
  return (
    <>
      <div>
        <h1>Media Sheet Viewer</h1>
        <div>
          <br />
          count: {state.count}
          <button onClick={() => dispatch({ type: "increment" })}>+</button>
          <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        </div>
      </div>
    </>
  );
}
