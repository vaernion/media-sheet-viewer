import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./app.css";
import { films, filmsSorted } from "./classes/Film";
import { FilmDetails } from "./components/FilmDetails";
import { FilmsList } from "./components/FilmsList";
import { NotFound } from "./NotFound";

const mediaContext = { films, filmsSorted };
export const MediaContext = React.createContext();

const menu = [
  { path: "/", name: "Home" },
  { path: "/films", name: "Films" },
  { path: "/tv", name: "TV" },
];

function App() {
  return (
    <>
      <Router basename="/media-sheet-viewer">
        {menu.map((e) => (
          <Link className="menuLink" key={e.name} to={e.path}>
            {e.name}
          </Link>
        ))}
        <MediaContext.Provider value={mediaContext}>
          <Switch>
            <Route path="/" exact>
              <FilmsList />
            </Route>
            <Route path="/films" exact>
              <FilmsList />
            </Route>
            <Route path="/films/:filmId">
              <FilmDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </MediaContext.Provider>
      </Router>
    </>
  );
}

export default App;
