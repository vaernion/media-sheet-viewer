import React from "react";
import ReactDOM from "react-dom";
import GamesList from ".";
import Store from "../Store";

test("renders", () => {
  const element = (
    <Store>
      <GamesList />
    </Store>
  );

  ReactDOM.render(element, document.createElement("div"));
});
