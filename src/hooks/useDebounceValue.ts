import { useEffect, useState } from "react";

/**
 *
 * Returns latest value when it stops changing, or the previous stable value.
 * @export
 * @template T
 * @param {T} value
 * @param {number} delay Milliseconds
 * @returns {T} Debounced value
 */
export function useDebounceValue<T>(value: T, delay: number): T {
  const [state, setState] = useState(value);

  useEffect(() => {
    const debounce = setTimeout(() => setState(value), delay);

    return () => clearTimeout(debounce);
  }, [value, delay]);

  return state;
}
