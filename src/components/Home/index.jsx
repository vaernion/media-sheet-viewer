import * as React from "react";
import { MediaContext } from "../Store";
// import { Redirect } from "react-router-dom";

export default function Home() {
  const context = React.useContext(MediaContext);
  return (
    <>
      <h1>Media Sheet Viewer</h1>
      <br />
      count: {context.store.count}
      <button onClick={() => context.dispatch({ type: "increment" })}>+</button>
      <button onClick={() => context.dispatch({ type: "decrement" })}>-</button>
      {/* <Redirect to="/films" /> */}
    </>
  );
}
