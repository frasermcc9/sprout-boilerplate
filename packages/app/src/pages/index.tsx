import { useQuery } from "@apollo/client";
import { NextPage } from "next";
import React from "react";
import { QUERY_RANDOM_NUMBER } from "../graphql/functions/TestQueries";
import { RandomNumber } from "../types/RandomNumber";

const Index: NextPage = (props) => {
  const { data } = useQuery<RandomNumber>(QUERY_RANDOM_NUMBER, { fetchPolicy: "no-cache" });

  return (
    <div className="flex justify-center text-xl text-center">
      <div className="flex flex-col gap-y-4">
        <div>Welcome!</div>
        <div>Your random number is {data?.randomNumber ? data.randomNumber : "loading..."}</div>
      </div>
    </div>
  );
};

export default Index;
