import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <h2>Total news : {data.length}</h2>
    </div>
  );
};

export default Home;
