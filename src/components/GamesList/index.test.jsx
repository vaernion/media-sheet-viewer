import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GamesList from ".";
import Store from "../Store";

const element = (
  <Router>
    <Store>
      <GamesList />
    </Store>
  </Router>
);

test("renders with search field", () => {
  render(element);

  expect(screen.getByPlaceholderText("|", { exact: false }));
});

test("sorts by developer", () => {
  render(element);

  fireEvent.click(screen.getAllByText("Developer")[0]);
  expect(
    screen.getAllByText("Developer", { exact: false })[0]
  ).toHaveTextContent("↓");
});
