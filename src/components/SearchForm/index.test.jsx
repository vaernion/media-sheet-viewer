import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import { SearchForm } from ".";

const searchField = "star";
const setSearchField = jest.fn();
const placeholder = "some placeholder text";

const element = (
  <SearchForm
    value={searchField}
    setValue={setSearchField}
    placeholder={placeholder}
  />
);

test("should render search form", () => {
  ReactDOM.render(element, document.createElement("div"));
});

test("input renders with placeholder text", () => {
  const { container } = render(element);
  expect(container.querySelector("input").placeholder).toBe(placeholder);
});

test("button renders with textcontent", () => {
  const { container } = render(element);
  expect(container.querySelector("button").textContent).toBe("Clear");
});
