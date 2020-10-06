import Layout from "../components/Layout";
import { useState } from "react";
import axios from "axios";
import useSWR from "swr";
import CardsDisplay from "../components/CardsDisplay";
import Construction from "../components/Construction";
import { usePagination } from "../hooks/usePagination";
import Pagination from "../components/Pagination";

const SpinOff = ({ characters, total, quotes }) => {
  let searchResults = characters;
  const [reveal, setReveal] = useState(false);
  const [charName, setCharName] = useState("");
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const queryURL = `${process.env.NEXT_PUBLIC_BASE_URL}characters?category=better+call+saul`;
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

  if (chars.length !== 0) {
    searchResults = chars;
  }
  return (
    <>
      <Layout>
        <Construction target="Better Call Saul API" />
        <CardsDisplay
          characters={searchResults}
          culprit={culprit}
          onClick={(e) => {
            setCharName(e.currentTarget.name.split(" ").join("+"));
            setReveal(true);
          }}
          quotes={quotes}
        />
        <Pagination
          onClick={() => {
            setSize(size + 1);
          }}
          isLoadingMore={isLoadingMore}
          isReachingEnd={isReachingEnd}
          current={chars.length}
          total={total}
        />
      </Layout>
    </>
  );
};

export default SpinOff;

export const getStaticProps = async () => {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}characters?category=better+call+saul`
  );
  const quotes = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}quotes`);
  return {
    props: {
      characters: result.data,
      total: result.data.length,
      quotes: quotes.data,
    },
  };
};
