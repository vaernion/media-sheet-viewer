import { useEffect, useState } from "react";

/**
 * Returns latest value when it stops changing, or the previous stable value.
 * @export
 * @param {any} value Any primitive
 * @param {number} delay Milliseconds
 * @returns Debounced value
 */
export function useDebounceValue(value, delay) {
  const [state, setState] = useState(value);

  useEffect(() => {
    const debounce = setTimeout(() => setState(value), delay);

    return () => clearTimeout(debounce);
  }, [value, delay]);

  return state;
}
