import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";
import { films, filmsSorted } from "./classes/Film";
import { FilmDetails } from "./components/FilmDetails";
import { FilmsList } from "./components/FilmsList";

const mediaContext = { films, filmsSorted };
export const MediaContext = React.createContext();

const menu = [
  { path: "/", name: "Home" },
  { path: "/films", name: "Films" },
  { path: "/tv", name: "TV" },
];

function App() {
  // const match = useRouteMatch();
  return (
    <>
      <Router>
        {menu.map((e) => (
          <Link key={e.name} to={e.path}>
            {e.name}
          </Link>
        ))}
        <MediaContext.Provider value={mediaContext}>
          <Route path="/" exact>
            <FilmsList />
          </Route>
          <Route path="/films" exact>
            <FilmsList />
          </Route>
          <Route path="/films/:filmId">
            <FilmDetails />
          </Route>
          {/* <Route path={`$match.path}/:filmId/`}></Route> */}
        </MediaContext.Provider>
      </Router>
    </>
  );
}

export default App;
