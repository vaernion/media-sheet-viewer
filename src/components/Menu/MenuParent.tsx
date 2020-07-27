import * as React from "react";
import { NavLink } from "react-router-dom";
import { MenuItem, menuItems } from "../../App";

type Props = {
  item: MenuItem;
};

export function MenuParent({ item }: Props) {
  const [active, setActive] = React.useState(false);

  const menuChildren = menuItems.filter((child) => child.parent === item.name);

  const handleMouseEnter = () => {
    setActive(true);
  };

  const handleMouseLeave = () => {
    setActive(false);
  };

  if (item.parent) return null;
  return (
    <>
      <span
        key={item.name}
        className={`${item.name} ${item.parent ? "hover-" + item.parent : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className="menu-parent">
          <NavLink
            className="menu-link"
            activeClassName="menu-link-active"
            to={item.path}
            exact={item.exact}
          >
            {item.name}
          </NavLink>
        </span>

        {false || (active && menuChildren.length > 0) ? (
          <span className={`menu-children`}>
            {menuChildren.map((child) => {
              return (
                <span
                  key={child.parent + child.path}
                  className={`menu-child ${active ? "menu-child-active" : ""}`}
                >
                  <NavLink
                    className="menu-link"
                    activeClassName="menu-link-active"
                    to={child.path}
                    exact={child.exact}
                  >
                    {child.name}
                  </NavLink>
                </span>
              );
            })}
          </span>
        ) : null}
      </span>
    </>
  );
}
