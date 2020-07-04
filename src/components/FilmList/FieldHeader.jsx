import * as React from "react";

export function FieldHeader(props) {
  let active = props.sort.sortBy === props.field ? true : false;
  let arrow = active ? (props.sort.sortReverse ? "↑" : "↓") : null;

  return (
    <>
      <div className={"fieldHeader film-" + props.field}>
        <span
          className={"fieldHeaderName" + (active ? " active" : "")}
          onClick={props.onclick ? () => props.onclick(props.field) : null}
        >
          {props.label} {arrow}
        </span>
      </div>
    </>
  );
}
