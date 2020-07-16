import * as React from "react";
import "./FieldHeader.css";

export function FieldHeader(props) {
  const active = props.sort.sortBy === props.field ? true : false;
  const arrow = active ? (props.sort.isSortReverse ? "↑" : "↓") : null;

  return (
    <>
      <span className={"fheader-outer"} style={{ width: props.width }}>
        <span
          tabindex={0}
          className={
            "fheader" +
            (active ? " active" : "") +
            (!props.onclick ? " no-click" : "")
          }
          onClick={props.onclick ? () => props.onclick(props.field) : undefined}
        >
          {props.label} {arrow}
        </span>
      </span>
    </>
  );
}
