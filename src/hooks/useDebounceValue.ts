import { useEffect, useState } from "react";

/**
 * Returns latest value when it stops changing, or the previous stable value.
 * @export
 * @param {any} value
 * @param {number} delay Milliseconds
 * @returns Debounced value
 */
export function useDebounceValue(value: unknown, delay: number) {
  const [state, setState] = useState(value);

  useEffect(() => {
    const debounce = setTimeout(() => setState(value), delay);

    return () => clearTimeout(debounce);
  }, [value, delay]);

  return state;
}
