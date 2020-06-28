import React from "react";

export function FieldHeader(props) {
  let active = props.sort.sortBy === props.field ? "*" : null;
  let arrow = active ? (props.sort.sortReverse ? "desc" : "asc") : null;

  return (
    <>
      <span
        className={"film-" + props.field + (active ? " active" : "")}
        onClick={props.onclick ? () => props.onclick(props.field) : null}
      >
        {props.label} {active} {arrow}
      </span>
    </>
  );
}
