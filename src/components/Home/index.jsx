import * as React from "react";
import { MediaContext } from "../Store";

export default function Home() {
  const context = React.useContext(MediaContext);
  document.title = "MediaSheetViewer";
  return (
    <>
      <div>
        <h1>Media Sheet Viewer</h1>
        <div>
          <br />
          count: {context.store.count}
          <button onClick={() => context.dispatch({ type: "increment" })}>
            +
          </button>
          <button onClick={() => context.dispatch({ type: "decrement" })}>
            -
          </button>
        </div>
      </div>
    </>
  );
}
