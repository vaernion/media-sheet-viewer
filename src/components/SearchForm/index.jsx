import * as React from "react";
import { useDebounceEffect } from "../../hooks/useDebounceEffect";
import "./searchForm.css";

export function SearchForm({ value, setValue, placeholder }) {
  const [state, setState] = React.useState(value);

  React.useEffect(() => {
    setState(value);
  }, [value]);

  useDebounceEffect(
    () => {
      setValue(state);
    },
    500,
    [state]
  );

  const handleClear = () => {
    setState("");
  };

  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        value={state}
        onChange={(e) => setState(e.currentTarget.value)}
      />
      <button onClick={handleClear}>Clear</button>
    </>
  );
}
