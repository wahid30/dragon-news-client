import React from "react";

const NewsSummaryCard = ({ news }) => {
  const { author, details, title } = news;

  return <div>{title}</div>;
};

export default NewsSummaryCard;
