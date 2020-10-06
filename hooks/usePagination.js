import { useSWRInfinite } from "swr";

export const usePagination = (queryURL, pageSize, fetcher) => {
  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    (index) => `${queryURL}&limit=${pageSize}&offset=${index * pageSize}`,
    fetcher
  );

  return { data, error, mutate, size, setSize, isValidating };
};
