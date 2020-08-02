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
const Stats = React.lazy(() => import("./components/Stats"));
const StatsFilms = React.lazy(() => import("./components/Stats/StatsFilms"));
const StatsTv = React.lazy(() => import("./components/Stats/StatsTv"));
const StatsGames = React.lazy(() => import("./components/Stats/StatsGames"));

type AppRoutes = {
  path: string;
  component: JSX.Element | React.LazyExoticComponent<() => JSX.Element>;
  exact?: boolean;
}[];

const appRoutes: AppRoutes = [
  { path: "/", component: <Home />, exact: true },
  { path: "/films", component: <FilmList />, exact: true },
  { path: "/films/:id", component: <MediaDetails /> },
  { path: "/tv", component: <TvList />, exact: true },
  { path: "/tv/:id", component: <MediaDetails /> },
  { path: "/games", component: <GamesList />, exact: true },
  { path: "/games/:id", component: <MediaDetails /> },
  { path: "/directors", component: <DirectorList /> },
  { path: "/creators/:id", component: <MediaDetails /> },
  { path: "/stats", component: <Stats />, exact: true },
  { path: "/stats/films", component: <StatsFilms /> },
  { path: "/stats/tv", component: <StatsTv /> },
  { path: "/stats/games", component: <StatsGames /> },
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
                  {appRoutes.map((route) => (
                    <Route
                      key={"route" + route.path}
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
