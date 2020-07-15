import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { FieldHeader } from ".";

let mockSort = { sortBy: "sortTitle", isSortReverse: false };
const mockHandleSort = () => {
  mockSort = { ...mockSort, isSortReverse: !mockSort.isSortReverse };
};
const mockLabel = "Title";

test("renders with props", () => {
  render(
    <FieldHeader
      field="sortTitle"
      label={mockLabel}
      width="20%"
      sort={mockSort}
      onclick={mockHandleSort}
    />
  );

  expect(screen.getByText(mockLabel, { exact: false }));
});

test("arrow changes", () => {
  render(
    <FieldHeader
      field="sortTitle"
      label={mockLabel}
      width="20%"
      sort={mockSort}
      onclick={mockHandleSort}
    />
  );

  fireEvent.click(screen.getByText(mockLabel, { exact: false }));

  expect(screen.getByText(mockLabel, { exact: false })).toHaveTextContent("↓");

  //   fireEvent.click(screen.getByText(mockLabel, { exact: false }));

  //   expect(screen.getByText(mockLabel, { exact: false })).toHaveTextContent("↑");
});
