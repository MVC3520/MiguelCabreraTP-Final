import { useEffect, useState } from "react";
import type { FetchState } from "../types/types";

export function useFetch<T>(url: string): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Error al obtener datos");
        }

        const result: T = await response.json();

        setData(result);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [url]);

  return { data, loading, error };
}