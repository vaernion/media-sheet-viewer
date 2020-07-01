import * as React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./app.css";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Spinner } from "./components/Spinner";
import Store from "./components/Store";

// import FilmDetails from "./components/FilmDetails";
// import FilmList from "./components/FilmList";
// import Home from "./components/Home";
// import NotFound from "./components/NotFound";

const Home = React.lazy(() => import("./components/Home"));
const FilmList = React.lazy(() => import("./components/FilmList"));
const FilmDetails = React.lazy(() => import("./components/FilmDetails"));
const NotFound = React.lazy(() => import("./components/NotFound"));

const menu = [
  { path: "/", name: "Home" },
  { path: "/films", name: "Films" },
  { path: "/tv", name: "TV" },
  { path: "/Wnnwkeqnkrnkqw124214", name: "void" },
  { path: "/spintest", name: "spinner" },
];

const routes = [
  { path: "/", exact: true, child: <Home /> },
  { path: "/films", exact: true, child: <FilmList /> },
  { path: "/films/:filmId", exact: false, child: <FilmDetails /> },
  { path: "/spintest", exact: false, child: <Spinner /> },
  { path: "*", exact: false, child: <NotFound /> },
];

function App() {
  return (
    <>
      <ErrorBoundary>
        <Router basename="/media-sheet-viewer">
          {menu.map((e) => (
            <Link className="menuLink" key={e.name} to={e.path}>
              {e.name}
            </Link>
          ))}
          <React.Suspense fallback={<Spinner />}>
            <Store>
              <Switch>
                {routes.map((route, i) => (
                  <Route key={route.path} path={route.path} exact={route.exact}>
                    {route.child}
                  </Route>
                ))}
              </Switch>
            </Store>
          </React.Suspense>
        </Router>
      </ErrorBoundary>
    </>
  );
}

export default App;
