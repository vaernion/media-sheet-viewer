import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import FilmList from ".";
import Store from "../Store";

const element = (
  <Router>
    <Store>
      <FilmList />
    </Store>
  </Router>
);

test("renders with search field", () => {
  render(element);

  expect(screen.getByPlaceholderText("examples", { exact: false }));
});

test("sorts by year", () => {
  render(element);

  fireEvent.click(screen.getAllByText("Year")[0]);
  expect(screen.getAllByText("Year", { exact: false })[0]).toHaveTextContent(
    "↓"
  );
});
