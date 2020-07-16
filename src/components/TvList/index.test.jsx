import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import TvList from ".";
import Store from "../Store";

const element = (
  <Router>
    <Store>
      <TvList />
    </Store>
  </Router>
);

test("renders with search field", () => {
  render(element);

  expect(screen.getByPlaceholderText("examples", { exact: false }));
});

test("sorts by creator", () => {
  render(element);

  fireEvent.click(screen.getAllByText("Creator")[0]);
  expect(screen.getAllByText("Creator", { exact: false })[0]).toHaveTextContent(
    "↓"
  );
});
