import React from "react";
import "./searchForm.css";

export function SearchForm(props) {
  const handleChange = (e) => {
    if (
      e.currentTarget.value.length >= 2 ||
      e.currentTarget.value.length === 0
    ) {
      props.onChange(e.currentTarget.value);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="search star wars | g:drama | hitchcock | y:2010"
        onChange={handleChange}
      />
    </>
  );
}
