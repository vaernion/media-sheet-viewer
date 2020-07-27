import { useCallback, useEffect } from "react";

/**
 * Fire callback when dependencies stay unchanged for duration of delay.
 * @link https://stackoverflow.com/a/61127960
 * @export
 * @param {function} callback
 * @param {number} delay Milliseconds
 * @param {any[]} dependencies
 */
export function useDebounceEffect(
  callback: () => void,
  delay: number,
  dependencies: any[]
) {
  const memoized = useCallback(callback, dependencies);

  useEffect(() => {
    const debounce = setTimeout(() => memoized(), delay);

    return () => clearTimeout(debounce);
  }, [memoized, delay]);
}
