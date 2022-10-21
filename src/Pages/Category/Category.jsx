import React from "react";
import { useLoaderData } from "react-router-dom";

const Category = () => {
  const data = useLoaderData();
  return (
    <div>
      <h2>This category have {data.length} data</h2>
    </div>
  );
};

export default Category;
