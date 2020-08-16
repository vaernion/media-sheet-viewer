import * as React from "react";
import "./FieldHeader.css";

type Props = {
  field: string;
  label: string;
  width: string;
  primary?: boolean;
  sort: { sortBy: string; isSortReverse: boolean };
  onclick?: (field: Props["field"]) => void;
};

export function FieldHeader(props: Props) {
  const active = props.sort.sortBy === props.field ? true : false;
  const arrow = active ? (props.sort.isSortReverse ? "↑" : "↓") : null;

  const handleClick = () => {
    if (!props.onclick) return;
    props.onclick(props.field);
  };

  return (
    <>
      <span
        className={"fheader-outer" + (props.primary ? " primary" : "")}
        style={{ width: props.width }}
      >
        <span
          tabIndex={0}
          className={
            "fheader" +
            (active ? " active" : "") +
            (!props.onclick ? " no-click" : "")
          }
          onClick={handleClick}
        >
          {props.label} {arrow}
        </span>
      </span>
    </>
  );
}
