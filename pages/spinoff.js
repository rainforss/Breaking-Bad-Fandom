import Layout from "../components/Layout";
import { useState } from "react";
import axios from "axios";
import useSWR from "swr";
import CardsDisplay from "../components/CardsDisplay";
import Construction from "../components/Construction";

const SpinOff = ({ characters }) => {
  const [reveal, setReveal] = useState(false);
  const [charName, setCharName] = useState("");
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data: culprit, error: culpritError } = useSWR(
    reveal
      ? `${process.env.NEXT_PUBLIC_BASE_URL}death-count?name=${charName}`
      : null,
    fetcher
  );
  return (
    <>
      <Layout>
        <Construction target="Better Call Saul API" />
        <CardsDisplay
          characters={characters}
          culprit={culprit}
          onClick={(e) => {
            setCharName(e.currentTarget.name.split(" ").join("+"));
            setReveal(true);
          }}
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
  return {
    props: {
      characters: result.data,
    },
  };
};
