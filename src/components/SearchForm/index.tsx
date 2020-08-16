import * as React from "react";
import { useDebounceEffect } from "../../hooks/useDebounceEffect";
import "./searchForm.css";

type Props = {
  value: string;
  setValue: (string: string) => void;
  placeholder: string;
};

/**
 * Input with onchange and two way handlers to allow
 * parent component to update the value
 * or SearchForm to debounce a setState callback to parent
 * @link https://stackoverflow.com/a/61127960
 * @export
 * @param {*} value Initial value
 * @param {function} delay Milliseconds
 * @param {*[]} dependencies
 */
export function SearchForm({ value, setValue, placeholder }: Props) {
  const [state, setState] = React.useState(value);

  // new value passed by parent
  React.useEffect(() => {
    setState(value);
  }, [value]);

  // debounced callback to parent
  useDebounceEffect(
    () => {
      setValue(state);
    },
    500,
    [state]
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.currentTarget.value);
  };

  const handleClear = () => {
    setState("");
  };

  return (
    <>
      <div className="searchform">
        <label className="input-label" htmlFor="searchFormInput">
          Filter:
        </label>
        <input
          type="text"
          id="searchFormInput"
          placeholder={placeholder}
          value={state}
          onChange={handleChange}
        />
        <button onClick={handleClear}>Clear</button>
      </div>
    </>
  );
}
