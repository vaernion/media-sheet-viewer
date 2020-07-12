import * as React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import "./app.css";
import { ErrorBoundary } from "./components/ErrorBoundary";
import NotFound from "./components/NotFound";
import { Spinner } from "./components/Spinner";
import Store from "./components/Store";

const Home = React.lazy(() => import("./components/Home"));
const FilmList = React.lazy(() => import("./components/FilmList"));
const FilmDetails = React.lazy(() => import("./components/FilmDetails"));
const DirectorList = React.lazy(() => import("./components/DirectorList"));
const DirectorDetails = React.lazy(() =>
  import("./components/DirectorDetails")
);
const TvList = React.lazy(() => import("./components/TvList"));
const TvDetails = React.lazy(() => import("./components/TvDetails"));

const menu = [
  { path: "/", exact: true, name: "Home" },
  { path: "/films", name: "Films" },
  { path: "/directors", name: "Directors" },
  { path: "/tv", name: "TV" },
  { path: "/spintest", name: "spinner" },
];

const routes = [
  { path: "/", exact: true, component: <Home /> },
  { path: "/films", exact: true, component: <FilmList /> },
  { path: "/films/:filmId", component: <FilmDetails /> },
  { path: "/directors", exact: true, component: <DirectorList /> },
  { path: "/directors/:directorName", component: <DirectorDetails /> },
  { path: "/tv", exact: true, component: <TvList /> },
  { path: "/tv/:tvId", component: <TvDetails /> },
  { path: "/spintest", component: <Spinner /> },
  { path: "*", component: <NotFound /> },
];

export default function App() {
  return (
    <>
      <ErrorBoundary>
        <Router basename={"media-sheet-viewer"}>
          <div className="headerContainer">
            <div className="menuItems">
              {menu.map((e) => (
                <NavLink
                  className="menuLink"
                  activeClassName="menuLinkActive"
                  key={e.name}
                  to={e.path}
                  exact={e.exact}
                >
                  {e.name}
                </NavLink>
              ))}
            </div>
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
