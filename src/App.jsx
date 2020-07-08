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
const DirectorDetails = React.lazy(() =>
  import("./components/DirectorDetails")
);

/**
 * Turns URL path into router basename by removing everything after the last slash
 * https://medium.com/@martinnovk_22870/how-to-route-react-app-in-a-subdirectory-31410b9ffa39
 * @param {string} path URL path, probably window.location.pathname
 * @returns {string} final basename
 */
const getBasename = (path) => {
  path.substr(0, path.lastIndexOf("/"));
};

const menu = [
  { path: "/", exact: true, name: "Home" },
  { path: "/films", name: "Films" },
  { path: "/tv", name: "TV" },
  { path: "/Wnnwkeqnkrnkqw124214", name: "void" },
  { path: "/spintest", name: "spinner" },
];

const routes = [
  { path: "/", exact: true, component: <Home /> },
  { path: "/films", exact: true, component: <FilmList /> },
  { path: "/films/:filmId", component: <FilmDetails /> },
  { path: "/directors/:directorName", component: <DirectorDetails /> },
  { path: "/spintest", component: <Spinner /> },
  { path: "*", component: <NotFound /> },
];

export default function App() {
  return (
    <>
      <ErrorBoundary>
        <Router basename={getBasename(window.location.pathname)}>
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
