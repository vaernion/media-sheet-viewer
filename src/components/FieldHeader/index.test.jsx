import { fireEvent, render, screen } from "@testing-library/react";
import * as React from "react";
import { FieldHeader } from ".";

const mockSort = { sortBy: "sortTitle", isSortReverse: false };
const mockLabel = "Title";

test("renders with props", () => {
  render(
    <FieldHeader
      field="sortTitle"
      label={mockLabel}
      width="20%"
      sort={mockSort}
    />
  );

  expect(screen.getByText(mockLabel, { exact: false })).toHaveTextContent(
    mockLabel
  );
  expect(screen.getByText(mockLabel, { exact: false })).toHaveTextContent("↓");
});

test("onclick triggers", () => {
  const onclick = jest.fn();

  render(
    <FieldHeader
      field="sortTitle"
      label={mockLabel}
      width="20%"
      sort={mockSort}
      onclick={onclick}
    />
  );

  fireEvent.click(screen.getByText(mockLabel, { exact: false }));
  expect(onclick).toHaveBeenCalledTimes(1);
});
