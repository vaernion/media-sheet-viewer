import * as React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
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
  { path: "/spintest", component: <Spinner /> },
  { path: "*", component: <NotFound /> },
];

function App() {
  return (
    <>
      <ErrorBoundary>
        <Router basename="/media-sheet-viewer">
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

export default App;
