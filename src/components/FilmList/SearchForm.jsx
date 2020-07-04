import * as React from "react";
import "./searchForm.css";

export function SearchForm(props) {
  const handleChange = (e) => {
    if (
      e.currentTarget.value.length >= 2 ||
      e.currentTarget.value.length === 0
    ) {
      props.setValue(e.currentTarget.value);
    }
  };

  const handleClear = (e) => {
    props.setValue("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="examples: star wars | g:drama | hitchcock | y:2010"
        value={props.value}
        onChange={handleChange}
      />
      <button onClick={handleClear}>Clear</button>
    </>
  );
}
