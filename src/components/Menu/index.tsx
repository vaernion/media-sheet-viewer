import * as React from "react";
import "./menu.css";
import { menuItems } from "./menuItems";
import { MenuParent } from "./MenuParent";

export type MenuItem = {
  path: string;
  name: string;
  exact?: boolean;
  image?: string;
  children?: MenuItem[];
};

export function Menu() {
  const [active, setActive] = React.useState(false);

  const handleTouchStart = () => {
    setActive(true);
  };
  const handleTouchEnd = () => {
    setActive(false);
  };

  return (
    <>
      <div
        className={"menu" + (active ? " active" : "")}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {menuItems.map((item) => {
          return (
            <MenuParent
              key={item.path}
              item={item}
              menuChildren={item.children}
            />
          );
        })}
      </div>
    </>
  );
}
