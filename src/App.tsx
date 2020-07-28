import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.css";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Menu } from "./components/Menu";
import NotFound from "./components/NotFound";
import { Spinner } from "./components/Spinner";
import Store from "./components/Store";
import "./styles/color.css";

const Home = React.lazy(() => import("./components/Home"));
const FilmList = React.lazy(() => import("./components/FilmList"));
const TvList = React.lazy(() => import("./components/TvList"));
const GamesList = React.lazy(() => import("./components/GamesList"));
const DirectorList = React.lazy(() => import("./components/DirectorList"));
const MediaDetails = React.lazy(() => import("./components/MediaDetails"));

const routes = [
  { path: "/", exact: true, component: <Home /> },
  { path: "/films", exact: true, component: <FilmList /> },
  { path: "/films/:id", component: <MediaDetails /> },
  { path: "/tv", exact: true, component: <TvList /> },
  { path: "/tv/:id", component: <MediaDetails /> },
  { path: "/games", exact: true, component: <GamesList /> },
  { path: "/games/:id", component: <MediaDetails /> },
  { path: "/directors", exact: true, component: <DirectorList /> },
  { path: "/creators/:id", component: <MediaDetails /> },
  { path: "*", component: <NotFound /> },
];

export default function App() {
  return (
    <>
      <ErrorBoundary>
        <Router basename={"media-sheet-viewer"}>
          <div className="headerContainer">
            <Menu />
          </div>
          <div className="bodyContainer">
            <React.Suspense fallback={<Spinner />}>
              <Store>
                <Switch>
                  {routes.map((route) => (
                    <Route
                      key={route.path}
                      path={route.path}
                      exact={route.exact}
                    >
                      {route.component}
                    </Route>
                  ))}
                </Switch>
              </Store>
            </React.Suspense>
          </div>
        </Router>
      </ErrorBoundary>
    </>
  );
}
