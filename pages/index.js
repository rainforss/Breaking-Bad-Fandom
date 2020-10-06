import Layout from "../components/Layout";
import React, { useState } from "react";
import axios from "axios";
import useSWR from "swr";
import CardsDisplay from "../components/CardsDisplay";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

const Index = ({ characters, total }) => {
  let searchResults = characters;
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [reveal, setReveal] = useState(false);
  const [charName, setCharName] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data: culprit, error: culpritError } = useSWR(
    reveal
      ? `${process.env.NEXT_PUBLIC_BASE_URL}death-count?name=${charName}`
      : null,
    fetcher
  );
  const { data: queriedCharacters, error: characterError } = useSWR(
    searched
      ? `${process.env.NEXT_PUBLIC_BASE_URL}characters?name=${query}&limit=${
          pageNumber * 12
        }`
      : null,
    fetcher
  );
  if (queriedCharacters && searched) {
    searchResults = queriedCharacters;
  }
  if (characterError) {
    console.log("error");
  }

  return (
    <>
      <Layout>
        <SearchBar
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onClick={() => {
            setQuery(searchValue);
            setSearched(true);
          }}
        />
        <CardsDisplay
          characters={searchResults}
          culprit={culprit}
          onClick={(e) => {
            setCharName(e.currentTarget.name.split(" ").join("+"));
            setReveal(true);
          }}
        />
        <Pagination
          onClick={() => {
            setPageNumber(pageNumber + 1);
            setSearched(true);
          }}
          current={searchResults.length}
          total={total}
        />
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}characters?limit=12`
  );
  const allChar = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}characters`
  );
  return {
    props: {
      characters: result.data,
      total: allChar.data.length,
    },
  };
};
