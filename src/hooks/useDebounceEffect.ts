import { useCallback, useEffect } from "react";

/**
 * Fire callback if dependencies change
 * and then stay unchanged for duration of delay.
 * @link https://stackoverflow.com/a/61127960
 * @export
 * @param {function():void} callback
 * @param {number} delay Milliseconds
 * @param {*[]} dependencies
 */
export function useDebounceEffect(
  callback: () => void,
  delay: number,
  dependencies: any[]
): void {
  const memoized = useCallback(callback, [...dependencies, callback]);

  useEffect(() => {
    const debounce = setTimeout(() => memoized(), delay);

    return () => clearTimeout(debounce);
  }, [memoized, delay]);
}
