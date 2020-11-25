import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <div className="home">
      <Link to="/items" className="button">
        Items List
      </Link>
    </div>
  );
};

export default Home;
