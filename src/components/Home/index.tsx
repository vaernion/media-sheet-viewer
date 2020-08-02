import * as React from "react";
import { NavLink } from "react-router-dom";
import filmDoubleExposure from "../../images/film-double-exposure_1920.jpg";
import { menuItems } from "../Menu/menuItems";
import "./Home.css";

export default function Home() {
  const pathsRaw = menuItems.filter((e) => e.name !== "Home");
  const paths = [];

  // alternate menu generation with visual display of child paths
  for (let path of pathsRaw) {
    const children: React.ReactChild[] = [];

    // generate this path's children
    if (path.children) {
      for (let child of path.children) {
        children.push(
          <span key={path.name + "child" + child.name} className="links-child">
            <NavLink to={child.path}>{child.name}</NavLink>
          </span>
        );
      }
    }

    paths.push(
      <span key={path.name + "parent"}>
        <span className="links-container">
          <span className="links-parent">
            <NavLink to={path.path}>{path.name}</NavLink>
          </span>
          <span className="links-children">{children}</span>
        </span>
      </span>
    );
  }

  document.title = "MediaSheetViewer";
  return (
    <>
      <div className="home">
        <h1>Media Sheet Viewer</h1>
        <div className="home-image">
          <img src={filmDoubleExposure} alt="film double exposure" />
        </div>
        <div className="home-links">{paths}</div>
      </div>
    </>
  );
}
