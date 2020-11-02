import Layout from "../components/Layout";
import React, { useState } from "react";
import { usePagination } from "../hooks/usePagination";
import axios from "axios";
import useSWR from "swr";
import CardsDisplay from "../components/CardsDisplay";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

const Index = ({ characters, total, quotes }) => {
  let searchResults = characters;
  let totalNumberOfResults = total;
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(false);
  const [reveal, setReveal] = useState(false);
  const [charName, setCharName] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const queryURL = `${process.env.NEXT_PUBLIC_BASE_URL}characters?name=${query}`;
  const { data, error, mutate, size, setSize, isValidating } = usePagination(
    queryURL,
    12,
    fetcher
  );

  const chars = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < 12);
  const isRefreshing = isValidating && data && data.length === size;

  const { data: culprit, error: culpritError } = useSWR(
    reveal
      ? `${process.env.NEXT_PUBLIC_BASE_URL}death-count?name=${charName}`
      : null,
    fetcher
  );

  if (chars.length !== 0 || searched) {
    searchResults = chars;
  }
  if (searched && query) {
    totalNumberOfResults = chars.length;
  }

  return (
    <>
      <Layout>
        <SearchBar
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              setQuery(searchValue);
              setSearched(true);
            }
          }}
          onClick={() => {
            setQuery(searchValue);
            setSearched(true);
          }}
        />
        <CardsDisplay
          characters={searchResults}
          quotes={quotes}
          culprit={culprit}
          onClick={(e) => {
            setCharName(e.currentTarget.name.split(" ").join("+"));
            setReveal(true);
          }}
        />
        <Pagination
          onClick={() => {
            setSize(size + 1);
          }}
          isLoadingMore={isLoadingMore}
          isReachingEnd={isReachingEnd}
          current={chars.length}
          total={totalNumberOfResults}
        />
      </Layout>
    </>
  );
};

export default Index;

export const getServerSideProps = async () => {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}characters?limit=12`
  );
  const quotes = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}quotes`);
  const allChar = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}characters`
  );
  return {
    props: {
      characters: result.data,
      total: allChar.data.length,
      quotes: quotes.data,
    },
  };
};
