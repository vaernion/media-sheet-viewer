import { useEffect, useState } from "react";

export function useFetch(path: string, options?: { [key: string]: unknown }) {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(path, options);
        const body = await res.json();
        setResponse(body);
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
