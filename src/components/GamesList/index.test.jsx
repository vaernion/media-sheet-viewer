import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GamesList from ".";
import Store from "../Store";

test("renders", () => {
  render(
    <Router>
      <Store>
        <GamesList />
      </Store>
    </Router>
  );
});

test("renders search field", () => {
  render(
    <Router>
      <Store>
        <GamesList />
      </Store>
    </Router>
  );

  expect(screen.getByPlaceholderText("examples", { exact: false }));
});

// test("sorts by developer", () => {
//   render(
//     <Router>
//       <Store>
//         <GamesList />
//       </Store>
//     </Router>
//   );

//   fireEvent.click(screen.getAllByText("Developer")[0]);

//   expect(
//     screen.getAllByText("Developer", { exact: false })[0]
//   ).toHaveTextContent("↓");

//   fireEvent.click(screen.getAllByText("Developer", { exact: false })[0]);

//   expect(
//     screen.getAllByText("Developer", { exact: false })[0]
//   ).toHaveTextContent("↑");
// });
