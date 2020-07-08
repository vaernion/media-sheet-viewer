import React from "react";
import ReactDOM from "react-dom";
import FilmList from ".";
import Store from "../Store";

test("renders", () => {
  const element = (
    <Store>
      <FilmList />
    </Store>
  );

  ReactDOM.render(element, document.createElement("div"));
});
