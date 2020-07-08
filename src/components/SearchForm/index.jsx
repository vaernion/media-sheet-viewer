import * as React from "react";
import "./searchForm.css";

export function SearchForm(props) {
  const { value, setValue, placeholder } = { ...props };
  const [state, setState] = React.useState("");

  React.useEffect(() => {
    setState(value);
  }, [value]);

  React.useEffect(() => {
    if (state.length >= 2 || state.length === 0) {
      setValue(state);
    }
  }, [state, setValue]);

  const handleChange = (e) => {
    setState(e.currentTarget.value);
  };

  const handleClear = () => {
    setState("");
  };

  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        value={state}
        onChange={handleChange}
      />
      <button onClick={handleClear}>Clear</button>
    </>
  );
}
