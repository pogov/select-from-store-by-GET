import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link style={{ color: "black", textDecoration: "none" }} to="/items">
        Items List
      </Link>
    </div>
  );
};

export default Home;
