import React from "react";
import "./searchForm.css";

export function SearchForm(props) {
  // const [searchField, setSearchField] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.currentTarget.checkValidity());
    if (e.currentTarget.checkValidity()) {
      props.onChange(e.currentTarget.value);
    }
  };

  // console.log(searchField);
  return (
    <>
      {/* <form onChange={handleSubmit}> */}
      <form>
        <input
          type="text"
          placeholder="search star wars | g:drama | hitchcock | y:2010"
          // value={searchField}
          // value={props.value}
          onChange={handleSubmit}
          // onChange={props.onChange}

          // onChange={(e) => setSearchField(e.currentTarget.value)}
        />
      </form>
    </>
  );
}
