import * as React from "react";
import filmDoubleExposure from "../../images/film-double-exposure_1920.jpg";
import { menuItems } from "../Menu/menuItems";
import "./Home.css";

export default function Home() {
  const pathsRaw = menuItems.filter((e) => e.name !== "Home");
  const paths = [];

  for (let path of pathsRaw) {
    const children: React.ReactChild[] = [];

    if (path.children) {
      for (let child of path.children) {
        children.push(
          <span key={path.name + "child" + child.name} className="links-child">
            <a href={child.path}>{child.name}</a>
          </span>
        );
      }
    }
    paths.push(
      <span key={path.name + "parent"}>
        <span className="links-container">
          <span className="links-parent">
            <a href={path.path}>{path.name}</a>
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
