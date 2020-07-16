import { render, screen } from "@testing-library/react";
import React from "react";
import { SearchForm } from ".";

const searchField = "star";
const setSearchField = jest.fn();
const placeholder = "some placeholder text";

const buttonText = "Clear";

const element = (
  <SearchForm
    value={searchField}
    setValue={setSearchField}
    placeholder={placeholder}
  />
);

test("renders search form", () => {
  render(element);
});

test("input renders with placeholder text", () => {
  render(element);

  expect(screen.getByPlaceholderText(placeholder));
});

test("button renders with textcontent and onclick", () => {
  render(element);

  expect(screen.getByText(buttonText)).toHaveTextContent(buttonText);
});
