import { useEffect, useState } from "react";

/**
 * A simple hook for Fetch API
 * that fetches an URL and converts response to JSON.
 * @export
 * @param {string} resource URL of the resource
 * @param {Object} [init] Fetch API Request init object
 * @returns {{data:*, error:Error|null, isLoading:boolean}}
 * An object with the fetched data as JSON,
 * Error (null if none), and isLoading
 */
export function useFetch(resource: string, init?: { [key: string]: unknown }) {
  const [state, setState] = useState<{
    data: any;
    error: Error | null;
    isLoading: boolean;
  }>({
    data: null,
    error: null,
    isLoading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(resource, init);
        if (!response.ok) throw new Error(response.statusText);
        const json = await response.json();
        setState((s) => ({ ...s, data: json, isLoading: false }));
      } catch (error) {
        setState((s) => ({ ...s, error, isLoading: false }));
      }
    };

    fetchData();
  }, [resource, init]);

  return state;
}
