import { useEffect, useState } from "react";

export function useFetch(path, options = null) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(path, options);
        const json = await res.json();
        // console.log("json", json);
        setResponse(json);
        setIsLoading(false);
      } catch (err) {
        console.error("useFetch error:", err);
        setError(err);
      }
    };

    fetchData();
  }, [path, options]);

  return { response, error, isLoading };
}
