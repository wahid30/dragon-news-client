import React, { useEffect, useState } from "react";

const LeftSiteNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/news-category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h4>All category: {categories.length}</h4>
    </div>
  );
};

export default LeftSiteNav;
