import * as React from "react";
import { menuItems } from "../../App";
import "./menuItems.css";
import { MenuParent } from "./MenuParent";

export function Menu() {
  return (
    <>
      <div className="menu">
        {menuItems.map((item) => (
          <MenuParent key={item.parent + item.path} item={item} />
        ))}
      </div>
    </>
  );
}
